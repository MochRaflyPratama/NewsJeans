import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import moment from "moment";

const Article = (props) => {
    const goToArticleDetail = () => {
        props.navigation.navigate("ArticleDetail", {
            title: props.title,
            description: props.description,
            urlToImage: props.urlToImage,
            publishedAt: props.publishedAt,
            sourceName: props.sourceName,
            likes: props.likes,
            views: props.views,
            comments: props.comments,
        });
    };

    return (
        <Pressable style={styles.container} onPress={goToArticleDetail}>
            {/* Image */}
            <Image source={{ uri: props.urlToImage }} style={styles.image} />

            <View style={styles.contentContainer}>
                <View style={styles.sourceContainer}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/40" }} // Placeholder profile image
                        style={styles.profileImage}
                    />
                </View>

                {/* Title */}
                <Text style={styles.title}>{props.title}</Text>

                {/* Description */}
                <Text style={styles.description} numberOfLines={3}>
                    {props.description}
                </Text>
                <Text style={styles.sourceName}>{props.sourceName}</Text>

                {/* Data */}
                <View style={styles.dataRow}>
                    <Text style={styles.dataText}>❤️ {props.likes} likes</Text>
                    <Text style={styles.dataText}>👀 {props.views} views</Text>
                    <Text style={styles.dataText}>💬 {props.comments} comments</Text>
                    <Text style={styles.date}>
                        {moment(props.publishedAt).format("MMM Do YY")}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Article;

// Styles remain unchanged
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 2,
    },
    image: {
        height: 200,
        width: "100%",
    },
    contentContainer: {
        padding: 15,
        paddingTop: 10,
    },
    sourceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    sourceName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#555",
    },
    dataRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    dataText: {
        fontSize: 12,
        color: "#888",
    },
    date: {
        fontSize: 12,
    },
});
