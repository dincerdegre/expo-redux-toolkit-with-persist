import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import SafeViewWrapper from "@/components/SafeViewWrapper";
import { useTheme } from "@/hooks/useTheme";

const IndexScreen = () => {
  const theme = useTheme();
  console.log("themeStyle", theme);

  return (
    <SafeViewWrapper>
      <Text style={{ color: theme.text }}>Home Screen</Text>
      <Link href="/modal" style={{ color: theme.text }}>
        Present modal
      </Link>
      <Link href="/settings" style={{ color: theme.text }}>
        Go to settings
      </Link>
    </SafeViewWrapper>
  );
};

export default IndexScreen;
