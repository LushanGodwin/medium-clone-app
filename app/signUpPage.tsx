import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useEffect } from "react";

export default function SignUpPage() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Medium</Text>
                <Text style={styles.subtitle}>Human stories and ideas.</Text>
                <Text style={styles.description}>
                    Discover perspectives that deepen understanding.
                </Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Image
                            style={styles.icon}
                            source={(require("../assets/images/google.png"))}
                        />
                        <Text style={styles.buttonText}>Sign up with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signUpButton}>
                        <Image
                            style={styles.icon}
                            source={(require("../assets/images/facebook.png"))}
                        />
                        <Text style={styles.buttonText}>Sign up with Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signUpButton}>
                        <Image
                            style={styles.icon}
                            source={(require("../assets/images/email.png"))}
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
        top:10,
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
        justifyContent: "center",  // This centers the content inside the button
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
        textAlign: 'center', // Ensures the text stays centered
        flex: 1, // Ensures the text takes up all available space
    },
    icon: {
        width: 24,
        height: 24,
    },
});
