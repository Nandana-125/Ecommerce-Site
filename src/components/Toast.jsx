import { createPortal } from "react-dom";
import "./Toast.css";
import { useToast } from "../context/ToastContext";

const Toast = () => {
  const { added, message } = useToast();
  return createPortal(
    <div>
      <section className="toast">{added && <p>{message}</p>}</section>
    </div>,

    document.getElementById("toast")
  );
};

export default Toast;
