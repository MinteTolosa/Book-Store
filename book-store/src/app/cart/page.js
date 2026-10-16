"use client";
import React from 'react';
import { useCart } from '../components/CartProvider';
import BookCard from '../components/BookCard';

export default function Cart() {
  const {cart} = useCart();
  return (
    <div className='flex-1'>
      <h1>Your Shoppin Cart</h1>
      <p>Review Cart item List before checkout.</p>
      {cart.length === 0 
        ? (
          <p>Your Cart is Empty.</p>
          )
        : (
          <div>
            {console.log(cart)}
            <p>{cart.length} items in your cart</p>
          <ul>
          {cart.map((book, index)=> (
            <BookCard key={index} book={book}/>
          ))}
        </ul>
        </div>
      )}

    </div>
  );
}
