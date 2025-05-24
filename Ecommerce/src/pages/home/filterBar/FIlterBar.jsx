import React, { useState } from "react";
import Ratings from "../../../components/ratings/Ratings";

const FIlterBar = () => {
  const [filter, setFilter] = useState({
    price: 5000,
    rating: 3,
  });
  //
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="min-h-screen w-full max-w-[20rem] border-r  border-r-amber-50/30">
      {/* !!!!!!!!!! RAdio Asending and Desending !!!!!!!! */}
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
      {/*  !!!!!!!!! CheckBOx !!!!!!!!!!  */}
      <div className="h-[1px] w-full bg-white/20 my-6"></div>
      {/* check box for out of stock and fast deliver */}
      <div className="mx-2">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Include Out Of Stock</span>
            <input
              type="checkbox"
              name="includeOutOfStock"
              className=" ml-5 checkbox border-blue-500 [--chkbg:theme(colors.blue.600)] [--chkfg:orange] checked:border-indigo-800"
            />
          </label>
        </div>
        <div className="form-control my-3">
          <label className="label cursor-pointer">
            <span className="label-text">Fast Delivery Only</span>
            <input
              type="checkbox"
              name="fastDelivery"
              className="ml-10 checkbox border-blue-500 [--chkbg:theme(colors.blue.600)] [--chkfg:orange] checked:border-indigo-800"
            />
          </label>
        </div>
      </div>
      {/* !!!!!! Rating !!!!!!! */}
      <div className="my-3 mx-2 p-2 border border-white">
        <Ratings
          defaultRating={filter.rating}
          isEditable={true}
          onRatingChange={(rating) =>
            setFilter({
              ...filter,
              rating: rating,
            })
          }
        />
      </div>
      {/* ############ Range Price ############  */}
      <div className=" flex flex-col my-4">
        <p>
          Price <strong>{filter.price}</strong> Rs
        </p>
        <input
          type="range"
          min={0}
          max={5000}
          name="price"
          value={filter.price}
          className="range range-info"
          onChange={(event) => handleInputChange(event)}
        />
      </div>
      {/* Clear Filters Button */}
      <button className="btn btn-neutral w-full">Clear Filters</button>
    </div>
  );
};

export default FIlterBar;
