import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import SafeViewWrapper from "@/components/SafeViewWrapper";
import { useTheme } from "@/hooks/useTheme";
import ExampleComponent from "@/components/ExampleComponent";

const IndexScreen = () => {
  const theme = useTheme();
  return (
    <SafeViewWrapper>
      <View style={styles.container}>
        <Text style={{ color: theme.text, fontSize: 20, paddingBottom: 20 }}>
          Home Screen
        </Text>
        <Link
          href="/modal"
          style={{ color: theme.text, fontSize: 16, paddingBottom: 20 }}
        >
          Present modal (Clickable)
        </Link>
        <Link
          href="/settings"
          style={{ color: theme.text, fontSize: 16, paddingBottom: 20 }}
        >
          Go to settings (Clickable)
        </Link>
        <ExampleComponent />
      </View>
    </SafeViewWrapper>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
