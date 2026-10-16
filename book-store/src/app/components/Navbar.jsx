import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='max-autos flex items-center justify-between px-5 py-6'>
        <h1>AddisBook</h1>
        <nav>
            <Link href={"/"}>Home</Link> <> | </>
            <Link href={"/books"}>Books</Link> <> | </>
            <Link href={"/cart"}>Cart</Link> <> | </>
            <Link href={"/checkout"}>Checkout</Link> <> | </>
        </nav>
    </div>
  )
}
