import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";
function Shop() {
  return (
    <div id="shop">
      <div className="container">
        <h1 className="shop-title">Shop</h1>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
