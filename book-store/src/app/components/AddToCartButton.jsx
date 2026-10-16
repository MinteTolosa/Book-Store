"use client";
import React from 'react';
import { useCart } from './CartProvider';
import { useState } from 'react';

function AddToCartButton({book}) {
  const { addToCart , removeFromCart} = useCart();
  const [isAdded, setIsAdded] = useState(false);

  function handleAddToCart() {
    if (!isAdded) {
      setIsAdded(true);
      addToCart({book});
     } else {
      setIsAdded(false);
      removeFromCart(book.id);
     }
  }
  return (
    <button onClick={handleAddToCart}>
      {isAdded ? "Remove for Cart" : "Add to Cart"}
    </button>
  );
}

export default AddToCartButton