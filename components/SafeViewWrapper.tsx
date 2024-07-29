import { View } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface SafeViewWrapperProps {
  children: React.ReactNode;
}

const SafeViewWrapper: React.FC<SafeViewWrapperProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
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
