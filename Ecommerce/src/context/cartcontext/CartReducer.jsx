export const CartReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    console.log("Increment");
  } else {
    return state;
  }
};
