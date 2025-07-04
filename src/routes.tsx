import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { useUserContext } from "./hooks/useUserContext";
import { RoleBasedRoute } from "./roleBasedRoute";
import type { UserRole } from "./types/userTypes";
import type { JSX } from "react";
import { ServerMaintenance } from "./pages/errors/503";

const Login = lazy(() => import("./pages/auth/Login"));
const Students = lazy(() => import("./pages/students/Students"));
const Uniruy = lazy(() => import("./pages/uniruy/Uniruy"));
const Unauthorized = lazy(() => import("./pages/errors/Unauthorized"));
const LoadingPage = lazy(() => import("./pages/loading/LoadignPage"));
const NotFoundPage = lazy(() => import("./pages/errors/404"));

export const AppRoutes = () => {
  const { user, loading, serverDown } = useUserContext();

  const privateRoutes: { path: string; render: () => JSX.Element; role: UserRole }[] = [
    { path: "/dashboard", render: () => <Students />, role: "student" },
    { path: "/insights", render: () => <Students page="carreiras" />, role: "student" },
    { path: "/inscricoes", render: () => <Students page="inscricoes" />, role: "student" },
    { path: "/avaliacoes/nova", render: () => <Students page="avaliar_estagio" />, role: "student" },
    { path: "/perfil", render: () => <Students page="perfil" />, role: "student" },
    { path: "/uniruy/dashboard", render: () => <Uniruy />, role: "teacher" },
    { path: "/uniruy/feedbacks", render: () => <Uniruy page="feadbacks" />, role: "teacher" },
    { path: "/uniruy/usuarios", render: () => <Uniruy />, role: "teacher" },
    { path: "/uniruy/dashboard/graficos", render: () => <Uniruy page="graficos" />, role: "teacher" },
  ];

  if (loading) return <LoadingPage />;

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route
          path="/"
          element={
            serverDown ? (
              <ServerMaintenance />
            ) : user ? (
              user.role === "student" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/uniruy/dashboard" replace />
              )
            ) : (
              <Login />
            )
          }
        />
        <Route path="/503" element={<ServerMaintenance />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {privateRoutes.map(({ path, render, role }) => (
          <Route key={path} path={path} element={<RoleBasedRoute render={render} allowedRole={role} />} />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
