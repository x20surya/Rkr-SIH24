import Topbar from "@/components/shared/Topbar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer.jsx";

export default function RootLayout() {
  return (
      <>
          <section className="flex flex-col w-full">
              <div>
                  <Topbar/>
              </div>
              <section className="flex flex-1 h-full">
                  <Outlet/>
              </section>
              <section>
              <Footer className="w-full bg-gray-800 text-white p-4 text-center"/>
              </section>
          </section>
          <Toaster/>
          
         
          
    
      </>

  );
}
