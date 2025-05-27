import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userdata = JSON.parse(localStorage.getItem("UserData"));

  const submitHandle = (e) => {
    e.preventDefault();

    if (email === userdata.email && password === userdata.password) {
      //
      const status = true;
      const loginTime = new Date().getTime();
      const expirytime = loginTime + 60 * 60 * 1000;
      // LocalStorage !!!!!
      const userStatus = localStorage.setItem("UserStatus", status);
      localStorage.setItem("loginTime", loginTime);
      localStorage.setItem("expiryTime", expirytime);

      toast.success("Login SuccesFully");
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      toast.error("Something Went Wrong Check Email Or Password");
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <h5 className="font-semibold text-2xl text-emerald-100">Login</h5>

          {/* Inputs */}
          <input
            required
            type="email"
            value={email}
            className="border-2 border-emerald-600 my-4 rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="border-2 border-emerald-600 my-4 rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="p-2 text-amber-100">
            Create Account{" "}
            <Link to="/signup" className="text-green-300">
              Click Here
            </Link>
          </p>
          <button className=" bg-emerald-600 rounded-full py-3 px-5 outline-none placeholder:text-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
