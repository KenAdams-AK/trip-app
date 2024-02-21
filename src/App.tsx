import { useCallback } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";

import { useCurrentUser } from "@/hooks/useCurrentUser";

import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";

function App() {
  const { user, setUser, handleLogout } = useCurrentUser();

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
