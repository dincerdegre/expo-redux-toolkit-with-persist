import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useTheme = () => {
  const systemColorScheme = useColorScheme() ?? "light";
  const themeChanger = useSelector((state: RootState) => state.theme.value);
  const effectiveTheme = themeChanger || systemColorScheme || "light";

  return {
    ...Colors[effectiveTheme as keyof typeof Colors],
    scheme: effectiveTheme,
  };
};
