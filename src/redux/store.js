import { configureStore } from "@reduxjs/toolkit";
import imageExpandReducer from "./features/imageExpandSlice";
import dataManagementEeducer from "./features/dataManagementSLice";
import { imageApi } from "../services/apiSlice";

export const store = configureStore({
  reducer: {
    imageExpand: imageExpandReducer,
    dataManagement: dataManagementEeducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imageApi.middleware),
});
