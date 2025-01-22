import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// Replace with your Unsplash API Access Key
const UNSPLASH_ACCESS_KEY = "_hE8ToVMIIeHDkEkb8NMn24Mbmmpdi3Yuu3TfaHW5mM";
const randomImageUrl = `https://api.unsplash.com/photos/random?query=people&client_id=${UNSPLASH_ACCESS_KEY}`;

const ProfileScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = React.useState(null);

  React.useEffect(() => {
    // Fetch a random image of a person from Unsplash
    const fetchImage = async () => {
      try {
        const response = await fetch(randomImageUrl);
        const data = await response.json();
        setImageUri(data.urls.small); // Use the small-size image URL
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.profileImage} />
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
          <Text style={styles.username}>NewsJeans</Text>
          <Text style={styles.name}>Moch Rafly Pratama - 17221025</Text>
          <Text style={styles.name}>Muhammad Iqbal Anshori - 17223006</Text>
          <Text style={styles.name}>Aldi Supriyadi - 17223010</Text>
          <Text style={styles.name}>Muhammad Ali Zafar Sidiq - 17223025</Text>
          <Text style={styles.name}>Ilham Fahri Husaeni - 17224012</Text>
        </View>

        {/* Account Section */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="person-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="shield-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="notifications-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Privacy</Text>
          </TouchableOpacity>
        </View>

        {/* Support & About Section */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.sectionItem}>
            <MaterialIcons name="subscriptions" size={20} color="#000" />
            <Text style={styles.sectionText}>My Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="document-text-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Terms and Policies</Text>
          </TouchableOpacity>
        </View>

        {/* Actions Section */}
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.sectionItem}>
            <MaterialIcons name="report-problem" size={20} color="#000" />
            <Text style={styles.sectionText}>Report a Problem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Ionicons name="add-circle-outline" size={20} color="#000" />
            <Text style={styles.sectionText}>Add Account</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 100,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingVertical: 10,
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  sectionText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#000",
  },
  logoutButton: {
    backgroundColor: "#0000FF",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 15,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
