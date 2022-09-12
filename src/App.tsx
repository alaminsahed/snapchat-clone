import React from "react";
import "./App.css";
import WebCam from "./components/WebcamCapture";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<WebCam />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
