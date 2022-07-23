import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Lyricfinder from "./Lyricfinder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Appp() {
  return (
   
    <BrowserRouter>
      <Routes>
      <Route index element={<App />} />
        <Route path="/main" element={<Lyricfinder />}/>
      </Routes>
    </BrowserRouter>

  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Appp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
