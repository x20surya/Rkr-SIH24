import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
