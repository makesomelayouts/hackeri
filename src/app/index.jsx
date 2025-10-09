import { createRoot } from "react-dom/client";
import "@shared/assets/styles/index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rules from "@pages/Rules";
import Shop from "@pages/Shop";
import Layout from "@shared/ui/layout/Layout";
import Home from "@pages/Home";
import Characters from "@pages/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <Home /> }, // TODO: 404
      { path: "/characters", element: <Characters /> },
      { path: "/rules", element: <Rules /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
