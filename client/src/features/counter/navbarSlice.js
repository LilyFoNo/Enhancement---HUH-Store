import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
      isNavbarDark: false,
    },
    reducers: {
      setNavbarDark: (state, action) => {
        state.isNavbarDark = action.payload;
      },
    },
  });