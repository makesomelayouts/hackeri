import { Outlet, ScrollRestoration } from "react-router";

function Layout() {
  return (
    <main className="bg-[#010207] flex flex-col font-unbounded">
      {/* <div className="h-dvh snap-y snap-mandatory overflow-y-auto">*/}
      <ScrollRestoration />
      <Outlet />
      {/* </div>*/}
    </main>
  );
}

export default Layout;
