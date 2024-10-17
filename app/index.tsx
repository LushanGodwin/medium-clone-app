import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/signUpPage");
    }, 8000);
  }, []);


  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/medium-logo.gif")}
          style={styles.logo}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
