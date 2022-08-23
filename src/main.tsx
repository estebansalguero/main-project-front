import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Generalized/Navbar";
import { Footer } from "./Components/Generalized/Footer";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
