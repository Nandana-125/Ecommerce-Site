import React, { createContext, useState, useContext } from "react";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
};

export const ToastProvider = ({ children }) => {
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("");
  const showToast = (msg) => {
    setMessage(msg);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <ToastContext.Provider value={{ added, message, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
export default ToastContext;
