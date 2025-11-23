import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SaleCard() {
    const { colorScheme } = useTheme();
    const styles = getStyles(colorScheme);
    
    return (
        <View style={styles.container}>
            {/* Decorative circles */}
            <View style={styles.decorativeCircleLeft} />
            <View style={styles.decorativeCircleRight} />
            <View style={styles.decorativeCircleBottom} />
            
            <View style={styles.contentWrapper}>
                {/* Left side - Discount */}
                <View style={styles.leftSection}>
                    <Text style={styles.percentageText}>30%</Text>
                    <Text style={styles.offText}>Off</Text>
                </View>
                
                {/* Right side - Content */}
                <View style={styles.rightSection}>
                    <Text style={styles.titleText}>THIS JULY</Text>
                    <Text style={styles.descriptionText}>
                        Travel to the end of the world{'\n'}this whole month{'\n'}cause we care when you are{'\n'}happy
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Try Now</Text>
                        <MaterialIcons name="arrow-forward" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        backgroundColor: layoutTheme.colors.neutral.black,
        padding: 24,
        borderRadius: 16,
        width: "100%",
        minHeight: 158,
        position: "relative",
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#4A90E2",
    },
    contentWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        zIndex: 1,
    },
    leftSection: {
        flex: 0.35,
        justifyContent: "flex-start",
    },
    rightSection: {
        flex: 0.65,
        paddingLeft: 16,
    },
    percentageText: {
        fontFamily: layoutTheme.fonts.imprima.regular,
        fontSize: 48,
        fontWeight: "700",
        color: layoutTheme.colors.neutral.white,
        lineHeight: 80,
        marginTop: -8,
    },
    offText: {
        fontFamily: layoutTheme.fonts.imprima.regular,
        fontSize: 55,
        fontWeight: "700",
        color: "#FCC21B",
        lineHeight: 72,
        marginTop: -12,
        textAlign: "right",
    },
    titleText: {
        fontFamily: layoutTheme.fonts.imprima.regular,
        fontSize: 22,
        fontWeight: "700",
        color: layoutTheme.colors.neutral.white,
        letterSpacing: 2,
        marginBottom: 12,
    },
    descriptionText: {
        fontFamily: layoutTheme.fonts.kaushanScript.regular,
        fontSize: 10,
        color: layoutTheme.colors.neutral.white,
        marginBottom: 16,
    },
    button: {
        backgroundColor: "rgba(139, 139, 139, 0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 24,
        borderRadius: 25,
        gap: 8,
        alignSelf: "flex-end",
        minWidth: 140,

    },
    buttonText: {
        fontFamily: layoutTheme.fonts.imprima.regular,
        fontSize: 16,
        fontWeight: "600",
        color: layoutTheme.colors.neutral.white,
    },
    decorativeCircleLeft: {
        position: "absolute",
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "rgba(80, 80, 80, 0.4)",
        left: -20,
        top: "50%",
        transform: [{ translateY: -50 }],
    },
    decorativeCircleRight: {
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "rgba(80, 80, 80, 0.4)",
        right: -10,
        top: "30%",
    },
    decorativeCircleBottom: {
        position: "absolute",
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "rgba(80, 80, 80, 0.4)",
        right: "40%",
        bottom: -30,
    },
})