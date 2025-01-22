import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ArticleDetailScreen = ({ route }) => {
    const {
        title,
        description,
        urlToImage,
        publishedAt,
        sourceName,
        likes,
        views,
        comments,
    } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: urlToImage }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.source}>Source: {sourceName}</Text>
                <Text style={styles.date}>{publishedAt}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.stats}>
                    <Text>❤️ {likes} likes</Text>
                    <Text>👀 {views} views</Text>
                    <Text>💬 {comments} comments</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ArticleDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: 200,
    },
    content: {
        padding: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    source: {
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
    },
    date: {
        fontSize: 12,
        color: "#888",
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    stats: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
