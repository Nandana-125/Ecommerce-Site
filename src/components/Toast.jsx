import React from "react";
import { createPortal } from "react-dom";
import "./Toast.css";
const Toast = ({ added, message }) => {
  return createPortal(
    <section className="toast">
      {added && (
        <p style={{ position: "fixed", bottom: "3rem" }}>
          Added Item successfully : {message}
        </p>
      )}
    </section>,
    document.getElementById("toast")
  );
};

export default Toast;
