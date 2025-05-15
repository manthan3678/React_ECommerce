import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer } from "./CartReducer";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const products = [...Array(20)].map((product) => {
    return {
      id: faker.string.uuid(),
      productName: faker.commerce.productName(),
      productDescription: faker.commerce.productDescription(),
      price: faker.number.int({ min: 0, max: 5000 }),
      image: faker.image.urlPicsumPhotos({
        width: 300,
        height: 300,
      }),
      inStock: faker.helpers.arrayElement([0, 5, 10, 15, 20]),
      fastDelivery: faker.datatype.boolean(),
      new: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  });

  const [state, dispatch] = useReducer(CartReducer, {
    products,
  });
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
