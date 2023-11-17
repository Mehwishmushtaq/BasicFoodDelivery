import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const { id, name, image, price, details } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{details}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
