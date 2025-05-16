import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(email, password);
    // handleLoogin(email, password);
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
          {/* Inputs */}
          <input
            required
            type="email"
            value={email}
            className="border-2 border-emerald-600  rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
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
