import { Navigate } from "react-router";
import { useUserContext } from "./hooks/useUserContext";
import type { JSX } from "react";
import type { UserRole } from "./types/userTypes";

interface RoleBasedRouteProps {
  render: () => JSX.Element;
  allowedRole: UserRole;
}

export const RoleBasedRoute = ({ render, allowedRole }: RoleBasedRouteProps) => {
  const { user } = useUserContext();

  if (!user) return <Navigate to="/" replace />;
  if (user.role !== allowedRole) return <Navigate to="/unauthorized" replace />;

  return render();
};
