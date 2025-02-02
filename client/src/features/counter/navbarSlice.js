import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    color: "black",
  },
  reducers: {
    setNavbarColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setNavbarColor } = navbarSlice.actions;

export default navbarSlice.reducer;