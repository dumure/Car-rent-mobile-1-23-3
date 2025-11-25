import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "accent";
}

export default function Button({
  title,
  onPress,
  variant = "primary",
}: ButtonProps) {
  const { colorScheme } = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor:
          variant === "primary"
            ? layoutTheme.colors.secondary[500]
            : layoutTheme.colors.background.black,
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    button: {
      backgroundColor: layoutTheme.colors.secondary[500],
      padding: 14,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: layoutTheme.colors.text.inverse,
      fontSize: 20,
      fontFamily: layoutTheme.fonts.roboto.bold,
    },
  });
