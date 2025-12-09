import { useTheme } from "@/hooks/use-theme";
import { CarCategoryEnum, CarType } from "@/types/car-types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CarCardProps {
  car: CarType;
}

const getCategoryBackgroundLight = (categories: string[]): string => {
  if (categories.includes(CarCategoryEnum.LUXURY)) {
    return "#F5F5F5"; // Light gray for luxury
  }
  if (categories.includes(CarCategoryEnum.FAMILY)) {
    return "#F4E0B9"; // Yellow/gold for family
  }
  if (categories.includes(CarCategoryEnum.CHEAP)) {
    return "#D4B5B5"; // Pinkish/mauve for cheap
  }
  return "#F5F5F5"; // Default light gray
};

const getCategoryBackgroundDark = (categories: string[]): string => {
  if (categories.includes(CarCategoryEnum.LUXURY)) {
    return "#363229"; // Dark gray for luxury
  }
  if (categories.includes(CarCategoryEnum.FAMILY)) {
    return "#20242e"; // Dark gray for family
  }
  if (categories.includes(CarCategoryEnum.CHEAP)) {
    return "#293629"; // Dark gray for cheap
  }
  return "#2D3748"; // Default dark gray
};

export default function CarCard({ car }: CarCardProps) {
  const { colorScheme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const backgroundColor = colorScheme === "dark" ? getCategoryBackgroundDark(car.categories) : getCategoryBackgroundLight(car.categories);


  return (
    <Link href={`/cars/${car.id}/page`}>

    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: car.image }} style={styles.image} contentFit="contain" />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.brandText}>{car.brand.toUpperCase()}</Text>
        
        <View style={styles.bottomContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${car.pricePerDay}</Text>
            <Text style={styles.dayText}>/day</Text>
          </View>
          
          <View style={styles.actionsContainer}>
            <Pressable 
              style={styles.iconButton}
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={18} 
                color="#C65D5D" 
              />
            </Pressable>
            
            <Pressable style={[styles.iconButton, styles.arrowButton]}>
              <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 152,
    height: 200,
    borderRadius: 6,
    overflow: "hidden",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },
    
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 16,
  },
  imageContainer: {
    width: "100%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    flex: 1,

  },
  brandText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#4A5568",
    letterSpacing: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D3748",
  },
  dayText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#718096",
    marginLeft: 2,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 4,
  },
  iconButton: {
    width: 22,
    height: 22,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  arrowButton: {
    backgroundColor: "#4A5568",
  },
});
