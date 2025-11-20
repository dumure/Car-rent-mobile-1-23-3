import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Image } from "expo-image";

export default function Header() {
  const { colorScheme, theme } = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icons/menu.png")}
        style={styles.menu}
      />
      <Ionicons
        name="cart-outline"
        size={40}
        color={
          theme === "dark"
            ? "#fff"
            : layoutTheme.colors.secondary[500]
        }
      />
    </View>
  );
}

const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme === "dark"
          ? layoutTheme.colors.background.dark
          : layoutTheme.colors.background.light,
      paddingHorizontal: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    menu: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
  });
