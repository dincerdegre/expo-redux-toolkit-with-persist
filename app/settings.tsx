import SafeViewWrapper from "@/components/SafeViewWrapper";
import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function SettingsScreen() {
  const theme = useTheme();
  return (
    <SafeViewWrapper>
      <Text style={{ color: theme.text }}>Settings</Text>
      <ThemeSelector />
    </SafeViewWrapper>
  );
}
