import React, { Suspense } from 'react';
import BookSkeleton from '../components/BookSkeleton';
import BookList from '../components/BookList';
import { getBooks } from '@/lib/books';
import CategoryFilter from '../components/CategoryFilter';
import FilterShell from '../components/FilterShell';

export const revalidate = 3600;
export default async function Books() {
  
  const books = await getBooks();
  
  return (
    <div>
        <h2 className='text-center'>Our Collection of Books</h2>
        <p className='text-center'>Discover a wide range of books acroos various </p>
        <CategoryFilter 
          categories={[
            "all", ...new Set(books.map((book) => book.category))]} />
        <Suspense fallback={<BookSkeleton />}>
          <FilterShell>
          <BookList books={books} />
          </FilterShell>
        </Suspense>
    </div>
  )
}
