import { Outlet } from "react-router-dom";

import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
