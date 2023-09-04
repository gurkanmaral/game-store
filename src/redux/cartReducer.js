import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the product is already in the cart
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        // Product not in cart, add it
        state.products.push(action.payload);
      } else {
        // Product already in cart, do nothing or update properties as needed
        // Example: state.products[existingProductIndex].property = action.payload.property;
      }
    },
    removeItem: (state, action) => {
      // Remove the product from the cart by filtering out the matching ID
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      // Reset the cart by clearing the products array
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;