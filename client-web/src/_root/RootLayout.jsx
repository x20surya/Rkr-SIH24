import Topbar from "@/components/shared/Topbar";
import { Toaster } from "@/components/ui/toaster";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "@/components/shared/Footer.jsx";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";

export default function RootLayout() {
  const { isAuthenticated } = useGlobalContext();

  return (
    <>
      <section className="flex flex-col w-full">
        <div>
          <Topbar />
        </div>

        <section className="flex flex-1 h-full">
          <Outlet />
        </section>
        <section>
          <Footer className="w-full bg-gray-800 text-white p-4 text-center" />
        </section>
      </section>
      <Toaster />
    </>
  );
}
