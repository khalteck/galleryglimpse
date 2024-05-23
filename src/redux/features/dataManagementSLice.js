import { createSlice } from "@reduxjs/toolkit";

// Initial state for the data management slice
const initialState = {
  value: {
    allImagesData: null, // Holds all image data
    searchedImagesData: null, // Holds searched image data
    limit: 15, // Initial limit for the number of images to fetch
  },
};

// Creating the data management slice
export const dataManagementSlice = createSlice({
  name: "dataManagement", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to set all image data
    setAllImageData: (state, action) => {
      state.value.allImagesData = action.payload;
    },
    // Reducer to set searched image data
    setSearchedImagesData: (state, action) => {
      state.value.searchedImagesData = action.payload;
    },
    // Reducer to increase the limit for fetching more images
    increaseLimit: (state) => {
      state.value.limit += 15;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllImageData, setSearchedImagesData, increaseLimit } =
  dataManagementSlice.actions;

// Exporting the reducer to be used in the store configuration
export default dataManagementSlice.reducer;
