import { createSlice } from "@reduxjs/toolkit";

// Initial state for the data management slice
const initialState = {
  value: {
    allImagesData: [], // Holds all image data
    searchedImagesData: [], // Holds searched image data
    limit: 15, // Initial limit for the number of images to fetch
    skip: 0, // to set "fetch after" id for pagination
  },
};

// Creating the data management slice
export const dataManagementSlice = createSlice({
  name: "dataManagement", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to set all image data
    setAllImageData: (state, action) => {
      state.value.allImagesData = [
        ...state.value.allImagesData,
        ...action.payload,
      ];
    },
    // Reducer to set searched image data
    setSearchedImagesData: (state, action) => {
      state.value.searchedImagesData = action.payload;
    },
    // Reducer to increase the skip for fetching more images
    increaseSkip: (state) => {
      state.value.skip += 15;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllImageData, setSearchedImagesData, increaseSkip } =
  dataManagementSlice.actions;

// Exporting the reducer to be used in the store configuration
export default dataManagementSlice.reducer;
