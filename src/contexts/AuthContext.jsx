import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../utils/axios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Check user auth
      const userResponse = await axiosInstance.get("/auth/me");
      if (userResponse.data.success) {
        setUser(userResponse.data.user);
      }
    } catch (error) {
      // User not authenticated
    }

    try {
      // Check admin auth
      const adminResponse = await axiosInstance.get("/admin/me");
      console.log(adminResponse.data);
      if (adminResponse.data.success) {
        setAdmin(adminResponse.data.admin);
      }
    } catch (error) {
      // Admin not authenticated
      console.error("Admin auth error:", error);
    }

    setLoading(false);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const adminLogin = (adminData) => {
    setAdmin(adminData);
  };

  const adminLogout = async () => {
    try {
      await axiosInstance.post("/admin/logout");
      setAdmin(null);
    } catch (error) {
      console.error("Admin logout error:", error);
    }
  };

  const value = {
    user,
    admin,
    loading,
    login,
    logout,
    adminLogin,
    adminLogout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
