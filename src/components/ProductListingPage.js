import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductListingPage.css";

const plants = [
  {
    id: 1,
    name: "Fern",
    price: 15,
    category: "Indoor",
    image: "/images/fern.jpg",
  },
  {
    id: 2,
    name: "Cactus",
    price: 20,
    category: "Succulent",
    image: "/images/cactus.jpg",
  },
  {
    id: 3,
    name: "Palm",
    price: 25,
    category: "Indoor",
    image: "/images/palm.jpg",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    image: "/images/aloe.jpg",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 15,
    category: "Indoor",
    image: "/images/spider.jpg",
  },
  {
    id: 6,
    name: "Snake Plant",
    price: 18,
    category: "Medicinal",
    image: "/images/snake.jpg",
  },
];

function ProductListingPage() {
  const dispatch = useDispatch();

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
