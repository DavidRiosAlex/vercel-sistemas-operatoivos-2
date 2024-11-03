'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header({ actualTab }: { actualTab: 'Home' | 'Conclusion' | 'Inteligencia Artificial' | 'Playground' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-slate-100 pt-4 sm:pt-8">
      <nav className="container mx-auto flex justify-between items-center px-4 py-2 bg-white rounded-full shadow-md sm:items-center sm:justify-center">
        {/* Logo or Brand Name */}
        <div className="text-xl font-semibold text-gray-800 block sm:hidden">{actualTab}</div>

        {/* Hamburger Icon for Small Screens */}
        <button onClick={toggleMenu} className="text-gray-800 sm:hidden focus:outline-none">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8 w-auto justify-between ">
          <li><Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link></li>
          <li><Link href="/artificial-intelligence" className="text-gray-800 hover:text-gray-600">Inteligencia Artificial</Link></li>
          <li><Link href="/conclusion" className="text-gray-800 hover:text-gray-600">Conclusion</Link></li>
          <li><Link href="/playground" className="text-gray-800 hover:text-gray-600">Playground</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-6 mt-4 sm:hidden">
          <li><Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link></li>
          <li><Link href="/artificial-intelligence" className="text-gray-800 hover:text-gray-600">Inteligencia Artificial</Link></li>
          <li><Link href="/conclusion" className="text-gray-800 hover:text-gray-600">Conclusion</Link></li>
          <li><Link href="/playground" className="text-gray-800 hover:text-gray-600">Playground</Link></li>
        </ul>
      )}
    </header>
  );
}