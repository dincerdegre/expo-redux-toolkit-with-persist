import React from "react";
import { View, Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../redux/slices/themeSlice";
import { RootState } from "../redux/store"; // Adjust the import path as needed
import { useTheme } from "@/hooks/useTheme";

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const themeChanger = useSelector((state: RootState) => state.theme.value);
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ color: theme.text }}>{themeChanger ?? "system"}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="Light" onPress={() => dispatch(change("light"))} />
        <Button title="Dark" onPress={() => dispatch(change("dark"))} />
        <Button title="System" onPress={() => dispatch(change("system"))} />
      </View>
    </View>
  );
};

export default ThemeSelector;
