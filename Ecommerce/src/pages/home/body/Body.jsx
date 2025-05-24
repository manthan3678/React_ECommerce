import React, { useContext } from "react";
import ProtectedRoutes from "../../auth/ProtectedRoutes";
import { CartContext } from "../../../context/cartcontext/CartContext";
import ProductCard from "./ProductCard";

const Body = () => {
  const { products } = useContext(CartContext);
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-[1rem] my-2 mx-1">
      {products.map((product) => {
        return <ProductCard />;
      })}
    </div>
  );
};

export default Body;
