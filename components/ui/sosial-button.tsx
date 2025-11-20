import { layoutTheme } from "@/constant/theme";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text } from "react-native";

interface SosialButtonProps {
    icon: string;
    title: string;
    onPress: () => void;
}

export default function SosialButton({ icon, title, onPress }: SosialButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        borderWidth: 2,
        borderColor: layoutTheme.colors.text.primary,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        height: 50,
    },
    icon: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 16,
        fontFamily: layoutTheme.fonts.imprima.regular,
        color: layoutTheme.colors.text.primary,
    },
})