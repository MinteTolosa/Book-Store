"use client";
import React, { Children } from 'react';
import { useState } from 'react';
// import BookList from './BookList';

export default function FilterShell({children}) {
    const [showBooks, setShowBooks] = useState(true);
  return (
    <div>
        <button onClick={()=>setShowBooks(!showBooks)}>
            {showBooks ? "Hide Books" : "Show Books"}
        </button>
        {/* {showBooks && <BookList />} */}
        {showBooks && children}
    </div>
  );
}
