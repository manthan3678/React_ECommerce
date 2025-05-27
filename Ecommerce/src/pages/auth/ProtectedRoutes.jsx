import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  // !!!!!!!!!! Session Time Out !!!!!!!!!!!!!
  const checkSessionExpiry = () => {
    const expiryTime = localStorage.getItem("expiryTime");
    const currentTime = new Date().getTime();

    if (currentTime > expiryTime) {
      // Session has expired
      localStorage.removeItem("loginTime");
      localStorage.removeItem("expiryTime");
      localStorage.removeItem("UserStatus");
      // Redirect to login page or perform logout operations
    }
  };
  //
  setInterval(() => {
    checkSessionExpiry();
  }, 60 * 1000); // 60,000 milliseconds = 1 minute

  const loginStatus = localStorage.getItem("UserStatus");
  // console.log(loginStatus);
  useEffect(() => {
    if (loginStatus === null || loginStatus === false) {
      navigate("/login");
    }
  }, [loginStatus]);
  return <div>{children}</div>;
};

export default ProtectedRoutes;
