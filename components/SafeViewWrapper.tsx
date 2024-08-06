import { View } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/hooks/useTheme";

interface SafeViewWrapperProps {
  children: React.ReactNode;
}

const SafeViewWrapper: React.FC<SafeViewWrapperProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const statusBarStyle = theme.scheme === "light" ? "dark" : "light";
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={theme.statusBarBgColor}
        style={statusBarStyle}
      />
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default SafeViewWrapper;
