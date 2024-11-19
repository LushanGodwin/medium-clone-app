import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Medium</Text>
      <Text style={styles.titleText}>Make Medium yours.</Text>
      <Text style={styles.subtitleText}>
        Let's find people to follow based on your interests.
      </Text>

      <View style={styles.profilesContainer}>
        {profileImages.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.profileImage}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={()=> router.push("/interestSelectionScreen")}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const profileImages = [
  // Add the URLs or sources of images here
  "https://via.placeholder.com/80", // Example placeholder
  "https://via.placeholder.com/80",
  "https://via.placeholder.com/80",
  "https://via.placeholder.com/80",
  "https://via.placeholder.com/80",
  "https://via.placeholder.com/80",
  "https://via.placeholder.com/80",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  welcomeText: {
    top: 10,
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "Playfair Display",
    marginBottom: 50,
  },
  titleText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Playfair Display",
    marginTop: 30,
    marginBottom: 5,
  },
  subtitleText: {
    fontFamily: "Playfair Display",
    color: "#aaa",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 150,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
  },
  continueButton: {
    backgroundColor: "#00c853",
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 15,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Playfair Display",
  },
});
