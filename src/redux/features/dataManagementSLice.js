import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    allImagesData: null,
    searchedImagesData: null,
    limit: 15,
  },
};

export const dataManagementSlice = createSlice({
  name: "dataManagement",
  initialState,
  reducers: {
    setAllImageData: (state, action) => {
      state.value.allImagesData = action.payload;
    },
    setSearchedImagesData: (state, action) => {
      state.value.searchedImagesData = action.payload;
    },
    increaseLimit: (state) => {
      state.value.limit += 15;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllImageData, setSearchedImagesData, increaseLimit } =
  dataManagementSlice.actions;

export default dataManagementSlice.reducer;
