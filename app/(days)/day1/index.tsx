import { Stack } from "expo-router";
import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Day1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Stack.Screen
          options={{ title: "Day 1", headerTitleAlign: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "MontserratSemiBold",
            fontSize: 50,
          }}
        >
          {" "}
          Day 1{" "}
        </Text>
      </View>
    );
  }
}
