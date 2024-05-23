import { createSlice } from "@reduxjs/toolkit";

// Initial state for the image expand slice
const initialState = {
  value: null, // Holds the currently expanded image's data or null if no image is expanded
};

// Creating the image expand slice
export const imageExpandSlice = createSlice({
  name: "imageExpand", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to set the expanded image data
    displayImage: (state, action) => {
      state.value = action.payload;
    },
    // Reducer to close the expanded image
    closeImage: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { displayImage, closeImage } = imageExpandSlice.actions;

// Exporting the reducer to be used in the store configuration
export default imageExpandSlice.reducer;
