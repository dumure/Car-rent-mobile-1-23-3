import { layoutTheme } from "@/constant/theme";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
