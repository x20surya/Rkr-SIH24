import Topbar from "@/components/shared/Topbar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <section className="flex flex-col w-full">
        <div>
          <Topbar />
        </div>
        <section className="flex flex-1 h-full">
          <Outlet />
        </section>
      </section>
      <Toaster/>
    </>
  );
}
