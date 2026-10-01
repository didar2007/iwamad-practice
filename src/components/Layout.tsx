import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header
        name="Didar Kalabayev"
        subtitle="Student of KBTU"
      />

      <Outlet />

      <Footer text="© 2026 Didar Kalabayev" />
    </>
  );
}

export default Layout;