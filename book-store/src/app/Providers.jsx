'use client';
import React from 'react';
import { CartProvider } from './components/CartProvider';

export default function Providers({children}) {
  return (
    <div>
      <CartProvider>
        {children}
      </CartProvider>
    </div>
  )
}
