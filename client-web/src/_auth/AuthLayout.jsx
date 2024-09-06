import { useGlobalContext } from "@/context/GlobalContext";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  backgroundflowers,
  complexflower1,
  greenbg1,
} from "@/constants/borders";

export default function AuthLayout() {
  const { isAuthenticated } = useGlobalContext();
  return (
    <div className="w-full flex border-primary border-[20px] bg-primary">
      <img className="fixed rotate-90 top-0 left-0" src={complexflower1} />
      <div
        style={{ backgroundImage: `url(${backgroundflowers})` }}
        className="rounded-3xl bg-secondary flex justify-center items-center w-full p-[20px]"
      >
        <div className="w-full h-full border-transparent rounded-3xl flex bg-background">
          {isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <>
              <section className="flex flex-1 justify-center items-center flex-col py-10">
                <Outlet />
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
