import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);

      setIsAuthenticated(true);
      
    } else {
      setToken("");
      setIsAuthenticated(false);
    }
  }, []);


  return (
    <GlobalContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        token,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
