import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Info from "./components/Info";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/info" element={< Info />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
