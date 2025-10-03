import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="bg-[#010207]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
