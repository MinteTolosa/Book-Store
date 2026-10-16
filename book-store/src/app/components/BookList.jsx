import React from 'react';
import BookCard from './BookCard';

export default async function BookList({books}) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
        { books.map((book) => (
            <BookCard key={book.id} book={book} />
        ))}</div>
  );
}
