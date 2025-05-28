import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Ratings from "../../../components/ratings/Ratings";
const ProductCard = ({ productDetails }) => {
  // console.log(productDetails);
  return (
    <div className="card bg-base-100 shadow-sm border border-white">
      <figure>
        <img
          src={productDetails.image}
          className="aspect-video object-cover h-full w-full"
          alt="Shoes"
        />
      </figure>
      {/*  */}
      <div className="card-body">
        <h2 className="card-title">
          <span className="line-clamp-1">{productDetails.productName}</span>
          {/* Conditional */}
          {productDetails.new && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>
        {/* !!!!!!!!!!!!!!! desciption */}
        <p className="line-clamp-2">{productDetails.productDescription}</p>
        <p>
          <strong>{productDetails.price}</strong> Rs
        </p>
        {/* Instock !!!!!!!!!!!!!!!! */}
        <p>
          {/* conditionals */}
          {productDetails.inStock ? (
            <p className="text-green-400">
              {" "}
              {productDetails.inStock} Items Left...
            </p>
          ) : (
            <p className="text-red-500">Out Of Stock.....</p>
          )}
        </p>
        {/* !!!!!!!!!! Delivery */}
        <p>
          {/* conditionals */}
          {productDetails.fastDelivery ? (
            <p className="text-blue-400 flex items-center gap-2">
              {" "}
              Fast delivery <AiOutlineThunderbolt className="mt-1" />
            </p>
          ) : (
            <p className="text-blue-400">5 Days Delivery.</p>
          )}
        </p>
        {/* Rating */}
        <Ratings defaultRating={productDetails.ratings} className={`w-5 h-5`} />
        {/* @@@@@@@@@ button @@@@@@@@@ */}
        <div className="card-actions justify-between my-2">
          {/* <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div> */}
          <button className="btn btn-outline btn-info">Add To Cart</button>
          <button className="btn btn-outline btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
