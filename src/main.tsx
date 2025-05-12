import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./context/UserContext";
import { Toaster } from "sonner";
import VLibras from "@djpfs/react-vlibras";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
        <VLibras forceOnload={true} />
        <Toaster richColors position="top-right" expand />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
