import React from "react";
import FIlterBar from "./filterBar/FIlterBar";
import Body from "./body/Body";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="min-[569px]:hidden">
        {/* DRawer For filter */}
        <div className="drawer my-3 p-1">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn text-xl btn-outline btn-info drawer-button"
            >
              FIlter
            </label>
          </div>
          <div className="drawer-side top-[4rem]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className=" menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <FIlterBar />
            </ul>
          </div>
        </div>
        {/* Line */}
        <div className="h-[1px] w-full bg-white/20"></div>
      </div>
      {/* Main Partition Section  */}
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
