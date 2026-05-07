import { createPortal } from "react-dom";
import "./Toast.css";
import { useContext } from "react";
import ToastContext from "../context/ToastContext";
const Toast = () => {
  const { added, message } = useContext(ToastContext);
  return createPortal(
    <section className="toast">
      {added && <p style={{ position: "fixed", bottom: "3rem" }}>{message}</p>}
    </section>,
    document.getElementById("toast")
  );
};

export default Toast;
