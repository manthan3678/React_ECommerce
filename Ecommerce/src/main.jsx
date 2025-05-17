import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/cartcontext/CartContext.jsx";
import { AuthProvider } from "./context/auth/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
        <ToastContainer />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
