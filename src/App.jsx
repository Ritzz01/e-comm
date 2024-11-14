import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import SignnIn from "./components/SignnIn";
import Payment from "./components/Payment";

function App() {
  
  return (
    <div>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<SignnIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
