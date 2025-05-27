import React from "react";
import FIlterBar from "./filterBar/FIlterBar";
import Body from "./body/Body";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" text-white flex">
        <div className="max-[570px]:hidden">
          <FIlterBar />
        </div>
        <Body />
      </div>
    </>
  );
};

export default Home;
