import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { AuthContextType } from "./typings";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth() as AuthContextType;
  console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}
