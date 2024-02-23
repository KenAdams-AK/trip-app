import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";

// import { ProtectedRoutes } from "@/components/ProtectedRoutes/ProtectedRoutes";
import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* <Route element={<ProtectedRoutes />}> //! uncoment to use protected routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
