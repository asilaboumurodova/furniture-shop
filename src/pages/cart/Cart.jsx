import React, { useContext } from "react";
import "./cart.css";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import x from "@i/x.svg"
function Cart({ open, toggleCart }) {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className={`cart ${open ? "active" : ""}`}>
      <div className="cart__content">
      <button className="close-btn" onClick={toggleCart}><img src={x} alt="" /></button>
      <h1 className="cart__title">Your Cart Items</h1>
      <div className="cart__items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <p className="subtotal">Subtotal: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default Cart;
