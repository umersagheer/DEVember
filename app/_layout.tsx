import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import {
  Montserrat_200ExtraLight,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, FontError] = useFonts({
    MontserratLight: Montserrat_200ExtraLight,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || FontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, FontError]);

  if (!fontsLoaded && !FontError) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.light.background },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "DEVember Fest",
            headerBackVisible: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
