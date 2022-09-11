import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";

type CameraState = {
  cameraImage: string | null | any;
};

const initialState = {
  cameraImage: null,
} as CameraState;

const cameraCapSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCameraImage: (state, action: PayloadAction<any>) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
      state.cameraImage = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraCapSlice.actions;

export const selectCameraImage = (state: RootState) => state.camera.cameraImage;

export default cameraCapSlice.reducer;
