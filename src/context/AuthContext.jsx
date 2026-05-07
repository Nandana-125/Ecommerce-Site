import React, { createContext, useState } from "react";

const AuthContext = createContext(null);

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
