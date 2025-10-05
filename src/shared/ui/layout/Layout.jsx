import { Outlet } from "react-router";

function Layout() {
  return (
    <main className="bg-[#010207] min-h-[100dvh] flex flex-col font-unbounded">
      <div className="grow">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
