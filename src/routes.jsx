import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screens/auth/login";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
