import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
}
