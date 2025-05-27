import React, { useContext } from "react";
import ProtectedRoutes from "../../auth/ProtectedRoutes";
import { CartContext } from "../../../context/cartcontext/CartContext";
import ProductCard from "./ProductCard";

const Body = () => {
  const { products } = useContext(CartContext);
  // console.log(products);
  return (
    <div className="grid grid-cols-3 gap-[1rem] max-[1100px]:grid-cols-2 max-[850px]:grid-cols-1 my-2 mx-1 p-2">
      {products.map((productDetails) => {
        return <ProductCard productDetails={productDetails} />;
      })}
    </div>
  );
};

export default Body;
