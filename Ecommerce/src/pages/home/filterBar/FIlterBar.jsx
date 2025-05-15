import React from "react";

const FIlterBar = () => {
  return (
    <div className="min-h-screen w-full max-w-[20rem] border-r  border-r-white">
      {/*  RAdio Asending and Desending */}
      <div className="my-3 mx-2">
        <div className="form-control ">
          <label className="label cursor-pointer">
            <span className="label-text">Ascending</span>
            <input
              type="radio"
              name="sortingType"
              className="radio checked:bg-blue-500 ml-5"
              value="ascending"
            />
          </label>
        </div>
        <div className="form-control my-2">
          <label className="label cursor-pointer">
            <span className="label-text">Descending</span>
            <input
              type="radio"
              name="sortingType"
              className="radio checked:bg-blue-500 ml-3"
              value="descending"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FIlterBar;
