'use client';
import React from 'react';
import { useState } from 'react';

export default function BooksLayout({children}) {
    const [category, setCategory] = useState("All");
  return (
    <div className='flex justify-around flex-1'>
        <aside>
            <h2>Books Sidebar</h2>
            <ul>
                <li>All Books</li>
                <li>Fiction</li>
                <li>Non-Fiction</li>
                <li>Science Fiction</li>
                <li>Fantasy</li>
            </ul>
        </aside>
        <main>{children}</main>
    </div>
  )
}
