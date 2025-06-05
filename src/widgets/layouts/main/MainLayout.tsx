import { Outlet } from "react-router";
import { Header } from "../../header";
import { Toaster } from "react-hot-toast";

export function MainLayout() {
  return (
    <div className="w-full">
      <Header />
      <div className="items-center mx-auto max-w-screen-xl">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}
