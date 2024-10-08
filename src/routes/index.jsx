import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/Homepage";
import BookDetails from "../pages/BookDetails";

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
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://bootcamp-a4-server.vercel.app/api/books/${params.id}`),
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
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
