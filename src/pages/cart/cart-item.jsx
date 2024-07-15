import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, type, name, rating, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cart__items">
      <img src={image} alt="" />
      <div className="description">
        <p className="cart-name">{name}</p>
        <p className ="cart-price">${price}</p>
        <div className="countHandler">
          <button className="add" onClick={() => removeFromCart(id)}> - </button>
          <input className="cart-input"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="remove" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
