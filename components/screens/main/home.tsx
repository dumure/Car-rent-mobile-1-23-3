import Header from "@/components/layout/header";
import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { colorScheme } = useTheme();
  const styles = getStyles(colorScheme);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text style={styles.text}>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        theme === "dark" ? layoutTheme.colors.background.dark : layoutTheme.colors.background.light,
    },
    text: {
      fontSize: 26,
      color: theme === "dark" ? layoutTheme.colors.text.inverse : layoutTheme.colors.text.secondary,
      fontFamily: layoutTheme.fonts.kaushanScript.regular,
    },
  });
