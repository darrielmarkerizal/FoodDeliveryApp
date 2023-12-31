import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    genre: null,
    address: null,
    description: null,
    dishes: null,
    lng: null,
    lat: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

export const { setResturant } = resturantSlice.actions;

export const selectResturant = (state) => state.resturant.resturant;

export default resturantSlice.reducer;
