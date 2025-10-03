import { createRoot } from "react-dom/client";
import "@app/providers/index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Characters from "@pages/Characters";
import Rules from "@pages/Rules";
import Shop from "@pages/Shop";
import Layout from "./Layout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
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
