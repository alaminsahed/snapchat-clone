import React from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useAppSelector, useAppDispatch } from "../app/hook";
import {
  selectCameraImage,
  setCameraImage,
  resetCameraImage,
} from "../features/cameraCapSlice";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebCam = () => {
  const webcamRef = React.useRef<any>(null);
  const dispatch = useAppDispatch();
  //const [imgSrc, setImgSrc] = React.useState("");

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setCameraImage(imageSrc));
    }
  }, [webcamRef]);

  return (
    <div className="webCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className="webCapture__button"
        onClick={capture}
        fontSize="large"
      />
      {/* {imgSrc && <img src={imgSrc} alt="screen shot" />} */}
    </div>
  );
};

export default WebCam;
