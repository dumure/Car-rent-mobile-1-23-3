import { create } from "zustand";
import { AuthStore, User } from "@/types/auth-types";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: User) => set({ user }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  logout: () => set({ user: null }),
}));
