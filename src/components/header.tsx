'use client'; // This component uses client-side interactivity (useState)

import Link from 'next/link';
import { useState } from 'react'; // Import useState for dropdown

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile/dropdown menu

  return (
    <header className="bg-white text-flower-green p-4 shadow-md sticky top-0 z-10 md:py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* The Flower Shoppe Brand Name (Text-based) - Left Aligned */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold text-flower-green">The Flower Shoppe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-flower-pink transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/plan" className="hover:text-flower-pink transition-colors">
                The Plan
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-flower-pink transition-colors">
                Why Partner With Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-flower-pink transition-colors">
                Contact
              </Link>
            </li>
            {/* New link for the contract */}
            <li>
              <Link href="/contract" className="hover:text-flower-pink transition-colors">
                Contract
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) - Top Right */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-flower-green focus:outline-none focus:ring-2 focus:ring-flower-pink p-2 rounded-md"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 mt-2 border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-flower-pink transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/plan" className="hover:text-flower-pink transition-colors" onClick={() => setIsMenuOpen(false)}>
                The Plan
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-flower-pink transition-colors" onClick={() => setIsMenuOpen(false)}>
                Why Partner With Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-flower-pink transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            {/* New link for the contract */}
            <li>
              <Link href="/contract" className="hover:text-flower-pink transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contract
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
