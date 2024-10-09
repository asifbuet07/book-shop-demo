import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import BookDetails from "../pages/BookDetails";
import PrivateBooksPage from "../pages/PrivateBooksPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://bootcamp-a4-server.vercel.app/api/book/${params.id}`),
      },
      {
        path: "/about",
        element: <div>Hello Asif!</div>,
      },
      {
        path: "/private-books",
        element: (
          <PrivateRoutes>
            <PrivateBooksPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/faq",
        element: <div>Welcome to FAQ page!</div>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
