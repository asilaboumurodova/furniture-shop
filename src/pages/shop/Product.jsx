import React, { useContext } from "react";
import buyImg from "@i/buy.svg";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, type, name, rating, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]
  return (
      <div className="info">
      <img className="product-img" src={image} alt="" srcset="" />
        <h2>{type}</h2>
        <p>{name}</p>
        <img className="rating-img" src={rating} alt="" />
        <div className="extra">
          <p>${price}</p>
          <button className="info-btn" onClick={() => addToCart(id)}>
            <img src={buyImg} alt="" /> {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
          </button>
        </div>
      </div>
  );
};
