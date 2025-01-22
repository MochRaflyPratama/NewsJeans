import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Article from "../components/Article";
import axios from "axios";

const CATEGORIES = ["general", "technology", "sports", "health", "business", "entertainment", "science"];

const HomeScreen = ({ navigation }) => {
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("general");

    const getNews = (category) => {
        axios
            .get("https://newsapi.org/v2/top-headlines", {
                params: {
                    country: "us",
                    category: category,
                    apiKey: "230e825b57824fd6aa417b4aeb488217",
                },
            })
            .then((response) => {
                const filteredArticles = response.data.articles.filter(
                    (article) => article.title !== "[Removed]"
                );
                setArticles(filteredArticles);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getNews(selectedCategory);
    }, [selectedCategory]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Kategori */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryContainer}
            >
                {CATEGORIES.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.categoryButtonSelected,
                        ]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text style={styles.categoryText}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Daftar Artikel */}
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <Article
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        publishedAt={item.publishedAt}
                        sourceName={item.source.name}
                        likes={Math.floor(Math.random() * 5000) + 1} // Dummy likes
                        views={Math.floor(Math.random() * 10000) + 1} // Dummy views
                        comments={Math.floor(Math.random() * 1500) + 1} // Dummy comments
                        navigation={navigation} // Tambahkan navigation ke props
                        onPress={() =>
                            navigation.navigate("ArticleDetail", {
                                article: {
                                    title: item.title,
                                    description: item.description,
                                    image: item.urlToImage,
                                    author: item.source.name,
                                    authorImage: "https://via.placeholder.com/40",
                                    likes: Math.floor(Math.random() * 5000) + 1,
                                    views: Math.floor(Math.random() * 10000) + 1,
                                    comments: Math.floor(Math.random() * 1500) + 1,
                                    date: item.publishedAt,
                                },
                            })
                        }
                    />
                )}
                keyExtractor={(item, index) => `${item.title}-${index}`}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    categoryContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#f8f8f8",
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#e0e0e0",
        borderRadius: 20,
        marginRight: 10,
    },
    categoryButtonSelected: {
        backgroundColor: "#ffffff",
    },
    categoryText: {
        fontSize: 14,
        color: "#333",
    },
});
