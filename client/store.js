import { configureStore } from "@reduxjs/toolkit";
import resturantSlice from "./slices/restaurantSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    resturant: resturantSlice,
  },
});
