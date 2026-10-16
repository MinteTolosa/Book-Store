import React from 'react';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';


export default function BookCard({ book }) {
  return (
    <div className='border py-7 px-5'>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <p>Price: ${book.price}</p>
        <p>Category: {book.category}</p>
        <Link href={`/books/${book.id}`}
        className='px-3'>View Details</Link>
        <AddToCartButton book = {book} />
    </div>
  );
}
