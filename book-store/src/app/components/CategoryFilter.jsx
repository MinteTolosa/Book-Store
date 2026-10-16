'use client';

import { useState } from "react";
import React from 'react'

export default function CategoryFilter({ categories }) {
    const [selectedcategory, setSelectedCategory] = useState("all");

  return (
    <div>
        <h2>Category Filter/Selector</h2>
        {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)}
                className="px-3">
                {category}
            </button>
        ))}    
    </div>
  );
}
