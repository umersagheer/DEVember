import { Stack } from "expo-router";
import { GitCompareArrows } from "lucide-react-native";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <GitCompareArrows color="#fdfdfd" size={50} style={styles.image} />
      <Text style={styles.title}>Track Every Transaction</Text>
      <Text style={styles.description}>
        Monitor your spending and contribution, ensure every penny is accounted
        for. The more you spend, the more you earn.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15141A",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fdfdfd",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    maxWidth: 340,
    color: "gray",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
