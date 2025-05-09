// RoleBasedRoute.tsx
import { Navigate } from "react-router";
import { useUserContext } from "./hooks/useUserContext";
import type { JSX } from "react";

interface RoleBasedRouteProps {
  element: JSX.Element;
  allowedRole: string;
}

export const RoleBasedRoute = ({ element, allowedRole }: RoleBasedRouteProps) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};
