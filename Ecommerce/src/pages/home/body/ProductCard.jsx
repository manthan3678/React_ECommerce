import React from "react";

const ProductCard = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-white">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      {/*  */}
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <p>
          <strong>421</strong> Rs
        </p>
        <p>Out Of Stock</p>
        <div className="card-actions justify-between">
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
