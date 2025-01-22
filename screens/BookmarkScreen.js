import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Bookmark Screen</Text>
    </View>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
