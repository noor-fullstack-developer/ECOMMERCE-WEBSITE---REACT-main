import React from "react";
import navbar from "../component/navbar.jsx";
import Cards from "../component/favcard.jsx";

const Cart = () => {

          function Product({ product, onAddToCart }) {
      return (
        <div>
          <h3>{cartItems}</h3>
          <p>${cartItems}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      );
    }
  return (
    <div className="flex justify-center">
      <div>
        <h1>My Wishlist</h1>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
