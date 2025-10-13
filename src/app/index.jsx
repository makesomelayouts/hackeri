import Characters from "@pages/Characters";
import Home from "@pages/Home";
import Rules from "@pages/Rules";
import Shop from "@pages/Shop";
import "@shared/assets/styles/index.css";
import Layout from "@shared/ui/layout/Layout";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

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
