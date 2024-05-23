// Importing the configureStore function from Redux Toolkit to create the store
import { configureStore } from "@reduxjs/toolkit";

// Importing reducers for managing the image expand state and data management state
import imageExpandReducer from "./features/imageExpandSlice";
import dataManagementEeducer from "./features/dataManagementSLice";

// Importing the API slice for handling API interactions
import { imageApi } from "../services/apiSlice";

// Creating and configuring the Redux store
export const store = configureStore({
  // Adding reducers to the store's state
  reducer: {
    imageExpand: imageExpandReducer, // Reducer for managing image expand state
    dataManagement: dataManagementEeducer, // Reducer for managing data management state
    [imageApi.reducerPath]: imageApi.reducer, // Adding the API slice reducer, dynamically keyed by its reducer path
  },
  // Adding custom middleware to the store
  middleware: (getDefaultMiddleware) =>
    // Concatenating the default middleware with the middleware from the API slice
    getDefaultMiddleware().concat(imageApi.middleware),
});
