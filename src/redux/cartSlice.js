import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      state.items.push({ ...plant, quantity: 1 });
      state.totalItems += 1;
      state.totalPrice += plant.price;
    },
    incrementQuantity: (state, action) => {
      const plant = state.items.find((item) => item.id === action.payload);
      plant.quantity += 1;
      state.totalItems += 1;
      state.totalPrice += plant.price;
    },
    decrementQuantity: (state, action) => {
      const plant = state.items.find((item) => item.id === action.payload);
      if (plant.quantity > 1) {
        plant.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= plant.price;
      }
    },
    removeFromCart: (state, action) => {
      const plantId = action.payload;
      const plant = state.items.find((item) => item.id === plantId);
      state.totalItems -= plant.quantity;
      state.totalPrice -= plant.price * plant.quantity;
      state.items = state.items.filter((item) => item.id !== plantId);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
