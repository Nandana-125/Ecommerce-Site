import { createPortal } from "react-dom";
import "./Toast.css";
const Toast = ({ added, message }) => {
  return createPortal(
    <section className="toast">
      {added && <p style={{ position: "fixed", bottom: "3rem" }}>{message}</p>}
    </section>,
    document.getElementById("toast")
  );
};

export default Toast;
