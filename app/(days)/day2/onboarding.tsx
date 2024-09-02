import { Colors } from "@/constants/Colors";
import { router, Stack } from "expo-router";
import {
  SnowflakeIcon,
  SparkleIcon,
  UniversityIcon,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FlipInEasyX,
  FlipInEasyY,
  ZoomInEasyDown,
  ZoomInEasyUp,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: <SnowflakeIcon color="#fdfdfd" size={50} />,
    title: "Devember",
    description:
      "Join the Devember challenge where developers build projects daily throughout December. Enhance your skills, push your limits, and share your progress with the community.",
  },
  {
    icon: <SparkleIcon color="#fdfdfd" size={50} />,
    title: "Mastering React Native",
    description:
      "Learn how to build powerful mobile applications using React Native. This course covers everything from the basics to advanced techniques, helping you master cross-platform development.",
  },
  {
    icon: <UniversityIcon color="#fdfdfd" size={50} />,
    title: "Fundraiser Tutorial",
    description:
      "Step-by-step guide on creating a fundraising app. Learn how to integrate payment systems, manage campaigns, and build an engaging user experience for fundraising platforms.",
  },
];
export default function Onboarding() {
  const [isPressed, setIsPressed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const { icon, title, description } = onboardingSteps[currentStep];

  const onContinue = () => {
    const isLast = currentStep === onboardingSteps.length - 1;
    if (isLast) {
      endOnboarding();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const onBack = () => {
    const isFirst = currentStep === 0;
    if (isFirst) {
      endOnboarding();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const endOnboarding = () => {
    setCurrentStep(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onStart(onBack),
    Gesture.Fling().direction(Directions.LEFT).onStart(onContinue)
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.indicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor:
                  index === currentStep
                    ? Colors.light.background
                    : Colors.light.backgroundTint,
              },
            ]}
          ></View>
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View>
          <Animated.View key={currentStep} style={styles.innerContainer}>
            <Animated.View entering={FadeIn}>{icon}</Animated.View>
            <Animated.Text entering={ZoomInEasyUp} style={styles.title}>
              {title}
            </Animated.Text>
            <Animated.Text entering={FlipInEasyX} style={styles.description}>
              {description}
            </Animated.Text>
          </Animated.View>

          <View style={styles.buttonsRow}>
            <Text style={styles.buttonText} onPress={endOnboarding}>
              Skip
            </Text>
            <Pressable
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              style={[styles.button, { opacity: isPressed ? 0.7 : 1.0 }]}
              onPress={onContinue}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15141A",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    flex: 1,
    height: 3,
    borderRadius: 5,
    backgroundColor: "#fdfdfd",
  },
  title: {
    color: "#fdfdfd",
    textAlign: "center",
    fontSize: 30,
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
  buttonsRow: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
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
