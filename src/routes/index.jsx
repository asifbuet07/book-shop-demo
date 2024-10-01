// export const ROUTES = {
//     HOME: "/",
// };

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "../pages/Homepage";

const router = createBrowserRouter([
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
]);

export default router;
