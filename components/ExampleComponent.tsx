import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store"; // Adjust the import path as needed
import { increment, decrement } from "../redux/slices/exampleSlice"; // Adjust the import path as needed
import { useTheme } from "@/hooks/useTheme";

const ExampleComponent = () => {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  return (
    <View style={{ gap: 10 }}>
      <Text
        style={{
          color: theme.text,
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Count: {count}
      </Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default ExampleComponent;
