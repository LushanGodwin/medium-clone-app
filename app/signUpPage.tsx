import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import {
    signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../assets/firebase/firebase";
import { router } from "expo-router";


export default function SignUpPage() {
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
      try {
          console.log("Initiating Google Sign-In via popup...");
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
          console.log("User signed in: ", user);
          router.push("/welcomePage");
          // Handle user information as needed
      } catch (err) {
          console.error("Google Sign-In Error: ", err);
          setError(err.message);
      }
  };
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Medium</Text>
        <Text style={styles.subtitle}>Human stories and ideas.</Text>
        <Text style={styles.description}>
          Discover perspectives that deepen understanding.
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleGoogleSignIn}>
            <Image
              style={styles.icon}
              source={require("../assets/images/google.png")}
            />
            <Text style={styles.buttonText}>Sign up with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Image
              style={styles.icon}
              source={require("../assets/images/facebook.png")}
            />
            <Text style={styles.buttonText}>Sign up with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Image
              style={styles.icon}
              source={require("../assets/images/email.png")}
            />
            <Text style={styles.buttonText}>Sign up with Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    top: 10,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontFamily: "Playfair Display",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "white",
    fontSize: 70,
    fontWeight: "300",
    marginTop: 50,
    fontFamily: "Playfair Display",
  },
  description: {
    textAlign: "center",
    color: "gray",
    fontSize: 20,
    marginTop: 20,
    fontFamily: "Playfair Display",
  },
  buttonsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  signUpButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: "80%",
    borderColor: "white",
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
