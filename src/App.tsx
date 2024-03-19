import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";

import { MainLayout } from "@/layout/MainLayout/MainLayout";

// import { ProtectedRoutes } from "@/components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route element={<ProtectedRoutes />}> //! uncomment to use protected routes */}
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* </Route> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
