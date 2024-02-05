import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Fitness App!</Text>
      <Text style={styles.description}>
        Sign in to get started or sign up to create a new account.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsSignedIn(true)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsSignedIn(false)}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 32
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default HomeScreen;