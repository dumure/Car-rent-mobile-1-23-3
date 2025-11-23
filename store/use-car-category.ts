import { CarCategory, CarCategoryStore } from "@/types/car-types";
import { create } from "zustand";

export const useCarCategoryStore = create<CarCategoryStore>((set) => ({
  carCategory: [],
  setCarCategory: (carCategory: CarCategory[]) => set({ carCategory }),
}));