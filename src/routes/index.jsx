import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";

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
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
