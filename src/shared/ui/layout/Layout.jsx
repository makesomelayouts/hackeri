import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="bg-[#010207] min-h-[100dvh] flex flex-col font-unbounded">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
