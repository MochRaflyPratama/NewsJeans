import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import CategoryScreen from "./screens/CategoryScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ArticleDetailScreen from "./screens/ArticleDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.profileHeader}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome name="user-circle" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>NewsJeans</Text>
        <Text style={styles.profileSubtitle}>Portal Berita</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome name="user-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "gray",
        headerShown: false, // Jangan tampilkan header bawaan tab
        tabBarStyle: {
        },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />

      {/* Search Tab */}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="search" size={24} color="black" />,
        }}
      />

      {/* Category Tab */}
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: () => <AntDesign name="appstore1" size={24} color="black" />,
        }}
      />

      {/* Bookmark Tab */}
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="bookmark" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Main Tabs with Header */}
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={({ navigation }) => ({
            header: () => <ProfileHeader navigation={navigation} />, // Pastikan navigation diteruskan
          })}
        />

        {/* Profile Screen */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        {/* Article Detail Screen */}
        <Stack.Screen
          name="ArticleDetail"
          component={ArticleDetailScreen}
          options={{
            title: "Article Detail",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  profileSubtitle: {
    fontSize: 14,
    color: "gray",
  },
});
