import AddToCartButton from '@/app/components/AddToCartButton';
import { getBooksID, getReviewsByBookId } from '@/lib/books';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function BooksDetails({params}) {
    const {id} = await params;
    // Streaming data fetching
    // const book = await getBooksID(id);
    // const reviews = await getReviewsByBookId(id);

    // Promise all
    const [book, reviews] = await Promise.all([
        getBooksID(id), getReviewsByBookId(id),
    ]);

    if (!book){
        notFound();
    }
    return (
    <div className='border py-5 px-7'>
        <h1 className='font-bold'>{book.title}</h1>
        <p>{book.description}</p>
        <p>Price: ${book.price}</p>
        <p>Category: {book.category}</p>
        <h1>reviews</h1>
        {reviews.length > 0 ? (
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.reviewer}</strong> : {review.comment}
                        <p>Rating: {review.rating}</p>
                    </li>
                ))}
            </ul>
        ): (
            <p>No reviews yet.</p>
        )
    }
        <AddToCartButton />
    </div>
  );
}
