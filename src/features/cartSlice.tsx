import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

interface ICartState {
  cart: {
    id: string;
    url: string;
    price: number;
    price_discount: string | number;
    title: string;
    count: number;
  }[];
}

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartState: (state, actions) => {
      if (!state.cart.find((item) => item.id === actions.payload.id)) {
        state.cart.push(actions.payload);
      }
    },
    addCountState: (state, actions) => {
      state.cart[actions.payload].count += 1;
    },
    removeCountState: (state, actions) => {
      if (state.cart[actions.payload].count === 1) {
        state.cart.splice(actions.payload, 1);
      } else {
        state.cart[actions.payload].count =
          state.cart[actions.payload].count - 1;
      }
    },
    // resTotalSum: (state, actions) => {
    //   state.totalSum = state.cart.reduce(function (sum, current) {
    //     return (
    //       sum +
    //       (current.price_discount ? +current.price_discount : current.price) *
    //         current.count
    //     );
    //   }, 0);
    // },
  },
});

export const { addToCartState, addCountState, removeCountState } =
  // export const { addToCartState, addCountState, removeCountState, resTotalSum } =
  cartSlice.actions;

export default cartSlice.reducer;

export const cart = (state: RootState) => state;
