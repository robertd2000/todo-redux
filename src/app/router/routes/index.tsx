import type { RouteObject } from "react-router";
import { Home } from "../../../pages/home";
import { Active } from "../../../pages/active";
import { Completed } from "../../../pages/completed";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/active",
    element: <Active />,
  },
  {
    path: "/completed",
    element: <Completed />,
  },
];
