import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const imageExpandSlice = createSlice({
  name: "imageExpand",
  initialState,
  reducers: {
    displayImage: (state, action) => {
      state.value = action.payload;
    },
    closeImage: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { displayImage, closeImage } = imageExpandSlice.actions;

export default imageExpandSlice.reducer;
