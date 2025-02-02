import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="w-[1150px] mx-auto">
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </div>
    </HelmetProvider>
  </StrictMode>
);
