import { createContext, useContext } from "react";
import { AuthContextType } from "./typings";

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext);
