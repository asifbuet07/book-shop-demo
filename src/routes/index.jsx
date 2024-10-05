import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <div>Hello Asif!</div>,
      },
      {
        path: "/blog",
        element: <div>Hello Asif!</div>,
      },
      {
        path: "/faq",
        element: <div>Welcome to FAQ page!</div>,
      },
    ],
  },
]);

export default router;
