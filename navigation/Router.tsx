import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { Link, Stack, router } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import { customDarkTheme, customDefaultTheme } from "@/constants/Colors";
import { useTheme } from "@/hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Router = () => {
  const systemColorScheme = useColorScheme();
  const themeController = useSelector((state: RootState) => state.theme.value);
  const theme = useTheme();

  const colorScheme = themeController || systemColorScheme;
  return (
    <ThemeProvider
      value={colorScheme === "dark" ? customDarkTheme : customDefaultTheme}
    >
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="settings" options={{ headerShown: true }} />
        <Stack.Screen
          name="modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "modal",
            headerRight: () => {
              return (
                <Link href="../" style={{ color: theme.text }}>
                  Dismiss
                </Link>
              );
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Router;
