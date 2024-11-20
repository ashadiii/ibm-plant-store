import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
