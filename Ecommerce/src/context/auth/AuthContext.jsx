import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const userData = localStorage.getItem("UserData");
    if (userData) {
      const data = JSON.parse(userData);
      setAuth(data.name);
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
