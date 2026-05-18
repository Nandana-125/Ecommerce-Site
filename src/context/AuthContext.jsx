import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser")
  );
  const user = isLoggedIn
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  const login = (loggedInUser) => {
    setIsLoggedIn(true);
    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
