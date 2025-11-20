import { layoutTheme } from "@/constant/theme";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function Index() {
  const { width } = useWindowDimensions();
  const router = useRouter()

  const handlePress = () => {
    router.replace("/sign-up/page");
  };

  return (
    <>
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/launch-background.png")}
        style={styles.background}
        contentFit="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          T<Text style={styles.highlight}>II</Text>RA
        </Text>
      </View>
      <View style={styles.content}>
        <View style={{ ...styles.contentContainer, width: width - 50 }}>
          <View style={styles.frame} />
          <Text style={styles.contentText}>
            Rent your dream car from the Best Company
          </Text>
          <View style={{...styles.buttonContainer}}>
            <Pressable onPress={handlePress} style={{...styles.getStartedButton, width: width - 104}}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
    <StatusBar barStyle="light-content" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 11,
    marginTop: -100
  },
  title: {
    fontSize: 50,
    color: layoutTheme.colors.text.inverse,
    fontWeight: "bold",
    fontFamily: layoutTheme.fonts.iceberg.regular,
  },
  highlight: {
    color: layoutTheme.colors.secondary[500],
  },
  frame: {
    width: 145,
    height: 8,
    backgroundColor: layoutTheme.colors.secondary[500],
  },
  contentText: {
    textAlign: "center",
    fontSize: 26,
    color: layoutTheme.colors.text.tertiary,
    fontFamily: layoutTheme.fonts.roboto.semiBold,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 74,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  getStartedButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: layoutTheme.colors.button.accent.bg,
    borderRadius: 50,
    paddingVertical: 14,
  },
  buttonText: {
    fontSize: 20,
    color: layoutTheme.colors.button.accent.text,
    fontFamily: layoutTheme.fonts.roboto.extraBold,
  },
});
