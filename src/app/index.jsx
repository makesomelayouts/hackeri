import { createRoot } from "react-dom/client";
import "@shared/assets/styles/index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Characters from "@pages/Characters";
import Rules from "@pages/Rules";
import Shop from "@pages/Shop";
import Layout from "@shared/ui/layout/Layout";
import Home from "@pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
