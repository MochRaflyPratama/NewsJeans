import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from "react-native";

const CATEGORIES = ["general", "technology", "sports", "health", "business", "entertainment", "science"];

const CategoryScreen = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        navigation.navigate("Home", { category });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select a News Category</Text>
            <ScrollView style={styles.categoryList}>
                {CATEGORIES.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={styles.categoryButton}
                        onPress={() => handleCategorySelect(category)}
                    >
                        <Text style={styles.categoryText}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    categoryList: {
        marginTop: 10,
    },
    categoryButton: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 18,
        color: '#333',
    },
});
