import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
        <Toaster richColors position="top-right" expand />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
