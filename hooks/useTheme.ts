import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export const useTheme = () => {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
};
