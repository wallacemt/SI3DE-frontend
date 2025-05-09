import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
