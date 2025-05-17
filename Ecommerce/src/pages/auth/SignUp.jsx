import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(name, email, password, number);
    const data = {
      name,
      email,
      password,
      number,
    };

    console.log(data);
    localStorage.setItem("UserData", JSON.stringify(data));
    toast.success("SignUp SuccessFully");
    navigate("/login");
    setEmail("");
    setPassword("");
    setName("");
    setNumber("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-400 rounded-xl p-14">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <h5 className="font-semibold text-2xl text-emerald-100">SignUP</h5>
          <input
            required
            type="text"
            value={name}
            className="border-2 border-emerald-400 my-4 rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
            placeholder="Enter Your Full Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* Inputs */}
          <input
            required
            type="email"
            value={email}
            className="border-2 border-emerald-400 my-4 rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="border-2 border-emerald-400 my-4 rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* Phone Number */}
          <input
            type="text"
            className="border-2 border-emerald-400 my-4 rounded-full py-3 px-5 outline-none placeholder:text-gray-400"
            placeholder="Enter Your Phone Number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />

          <button className=" bg-emerald-500 rounded-full py-3 px-5 outline-none placeholder:text-black font-medium">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
