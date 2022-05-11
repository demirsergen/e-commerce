import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { id: 1, name: "TV" },
    { id: 2, name: "Car" },
  ],
};

export const CartSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addItemToCart } = CartSlice.actions;

export default CartSlice.reducer;
