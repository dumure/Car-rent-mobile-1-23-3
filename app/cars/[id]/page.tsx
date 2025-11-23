import { carModels } from "@/data/car-models";
import { CarType } from "@/types/car-types";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CarDetails() {
    const { id } = useLocalSearchParams();
    const car = carModels.find((car: CarType) => car.id === id);
    if (!car) {
        return <Text>Car not found</Text>;
    }
    return (
        <View>
            <Text>{car.brand}</Text>
            <Text>{car.model}</Text>
            <Text>{car.year}</Text>
            <Text>{car.type}</Text>
            <Text>{car.seats}</Text>
            <Text>{car.transmission}</Text>
            <Text>{car.fuelType}</Text>
            <Text>{car.pricePerDay}</Text>
        </View>
    )
}