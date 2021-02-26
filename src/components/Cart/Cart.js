import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price;
  }

  let shipping = 0;
  if (totalPrice > 55) {
    shipping = 0;
  } else if (totalPrice > 15) {
    shipping = 5.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = (totalPrice / 10).toFixed(2);
  const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

  return (
    <div>
      <h4>Order summary:</h4>
      <p>Items ordered: {cart.length}</p>
      <p>Product price:{totalPrice}</p>
      <p>
        <small>shipping charge:{shipping}</small>
      </p>
      <p>Tax: {tax}</p>
      <p>Total price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
