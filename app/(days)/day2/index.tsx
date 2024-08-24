import { Link, Stack } from "expo-router";
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

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
          <Button title="Go to onboarding screens" />
        </Link>
      </View>
    );
  }
}
