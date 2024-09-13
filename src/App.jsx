import { useState } from "react";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Home from "./Home";
import Shopping from "./Shopping";
import Product from "./Product";
import { data } from "./Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Counter />; */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
