import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthContext } from "@/hooks/useAuthContext";

export function ProtectedRoutes() {
  const { user } = useAuthContext();
  const { pathname } = useLocation();

  if (!user) {
    return (
      <>
        <Navigate to="/login" />
        <Outlet />
      </>
    );
  }

  if (user && pathname === "/login") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
