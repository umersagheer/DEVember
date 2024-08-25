import { Link, Stack } from "expo-router";
import React, { Component } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default class Day1 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Stack.Screen
          options={{
            title: "Day-2 (Onboarding Screens)",
            headerTitleAlign: "center",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "MontserratSemiBold",
            fontSize: 50,
          }}
        >
          Day 2
        </Text>
        <Link href={"/day2/onboarding"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Go to onboarding screens</Text>
          </Pressable>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },
  buttonText: {
    color: "#fdfdfd",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    padding: 12,
  },
});
