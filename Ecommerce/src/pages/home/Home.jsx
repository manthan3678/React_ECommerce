import React from "react";
import FIlterBar from "./filterBar/FIlterBar";
import Body from "./body/Body";

const Home = () => {
  return (
    <div className=" text-white flex">
      <FIlterBar />
      <Body />
    </div>
  );
};

export default Home;
