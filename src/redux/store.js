import { configureStore } from "@reduxjs/toolkit";
import imageExpandReducer from "./features/imageExpandSlice";

export const store = configureStore({
  reducer: {
    imageExpand: imageExpandReducer,
  },
});
