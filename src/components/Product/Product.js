import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product-section">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-title">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock- order soon</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
