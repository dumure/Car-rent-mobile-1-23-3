import { ZodUUID } from "zod";

export interface User {
    id: ZodUUID | string;
    name: string;
    email: string;
    password: string;
}

export type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User) => void;
  logout: () => void;
};