import { LaunchStore } from "@/types/launch-types";
import { create } from "zustand";

export const useLaunchStore = create<LaunchStore>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index }),
}));