import { Navigate, Route, Routes } from "react-router";
import { Login } from "./pages/auth/Login";
import { useUserContext } from "./hooks/useUserContext";
import { Students } from "./pages/students/Students";
import { Uniruy } from "./pages/uniruy/Uniruy";
// import { Suspense } from "react";

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role === "teacher") {
    return <Navigate to="/uniruy/dashboard" />;
  }

  return <>{children}</>;
};

export const AppRoutes = () => {
  const privateRoutes = [
    { path: "/dashboard", element: <Students /> },
    { path: "/uniruy/dashboard", element: <Uniruy /> },
  ];
  const { user } = useUserContext();

  //Fazer com que os componentes sejam carregados de forma assincrona
  // <Suspense fallback={<Loading />}>
  //    <Routes>
  //       <Route path="/" element={user ? <DashBoard /> : <Login />} />
  //       <Route path="*" element={<NotFound />} />
  //   </Routes>
  // </Suspense>

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<PrivateRoutes>{route.element}</PrivateRoutes>} />
      ))}
    </Routes>
  );
};
