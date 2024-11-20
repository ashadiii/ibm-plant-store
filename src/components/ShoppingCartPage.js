import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import "./ShoppingCartPage.css";

function ShoppingCartPage() {
  const { items, totalItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice}</p>
          <button>Checkout (Coming Soon)</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCartPage;
