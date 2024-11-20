import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
