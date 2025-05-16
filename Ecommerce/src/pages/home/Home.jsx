import React from "react";
import FIlterBar from "./filterBar/FIlterBar";
import Body from "./body/Body";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" text-white flex">
        <FIlterBar />
        <Body />
      </div>
    </>
  );
};

export default Home;
