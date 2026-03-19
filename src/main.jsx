import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import Context from "./utils/Context.jsx";
import "./index.css";

// Is file se poori React app start hoti hai (entry point).
createRoot(document.getElementById("root")).render(
  // Context provider ko sabse bahar rakhne se poori app products state access kar sakti hai.
  <Context>
    {/* BrowserRouter routes ko URL ke saath map karta hai. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />

      {/* ToastContainer ek hi baar mount hota hai, fir app ke kisi bhi page se toast dikh sakta hai. */}
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  </Context>
);
