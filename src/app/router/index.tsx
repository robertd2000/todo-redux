import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    children: [...routes],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
