import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { MainLayout } from "../../widgets/layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...routes],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
