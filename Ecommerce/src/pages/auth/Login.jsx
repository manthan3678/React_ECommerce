import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userdata = JSON.parse(localStorage.getItem("UserData"));

  const submitHandle = (e) => {
    e.preventDefault();

    if (email === userdata.email && password === userdata.password) {
      console.log("Login SuccesFully");
      toast.success("Login SuccessFully");
      navigate("/");
    }
    setEmail("");
    setPassword("");
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
          <button className=" bg-emerald-600 rounded-full py-3 px-5 outline-none placeholder:text-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
