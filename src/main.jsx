import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
