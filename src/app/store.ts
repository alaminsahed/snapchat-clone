import { configureStore } from "@reduxjs/toolkit";
import cameraCapSlice from "../features/cameraCapSlice";

export const store = configureStore({
  reducer: {
    camera: cameraCapSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
