import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginFormSchema } from "./lib/schema";
import axios from "axios";
import { baseUrl } from "./lib/constants";
import * as z from "zod";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem("accessToken") ? true : false,
  );

  const login = async (formData: z.infer<typeof loginFormSchema>) => {
    const response = await axios.post(baseUrl + "/auth/signin", {
      password: formData.password,
      email: formData.email,
    });

    if (response.status === 201) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    return response;
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
