import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Topbar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </>
  );
}
