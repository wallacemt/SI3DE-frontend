import { Navigate, Route, Routes } from "react-router";
import { Login } from "./pages/auth/Login";
import { useUserContext } from "./hooks/useUserContext";
import { Students } from "./pages/students/Students";
import { Uniruy } from "./pages/uniruy/Uniruy";
import { RoleBasedRoute } from "./roleBasedRoute";
import { Unauthorized } from "./pages/errors/Unauthorized";
import { LoadingPage } from "./pages/loading/LoadignPage";
import { NotFoundPage } from "./pages/errors/404";

export const AppRoutes = () => {
  const { user, loading } = useUserContext();

  const privateRoutes = [
    { path: "/dashboard", element: <Students />, role: "student" },
    { path: "/carreira", element: <Students page="carreiras" />, role: "student" },
    { path: "/uniruy/dashboard", element: <Uniruy />, role: "teacher" },
    { path: "/uniruy/dashboard/graficos", element: <Uniruy page="graficos" />, role: "teacher" },
  ];

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
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
      <Route path="/unauthorized" element={<Unauthorized />} />

      {privateRoutes.map(({ path, element, role }) => (
        <Route key={path} path={path} element={<RoleBasedRoute element={element} allowedRole={role} />} />
      ))}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
