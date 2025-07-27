import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-flower-green p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* The Flower Shoppe Brand Name (Text-based) */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-flower-green">The Flower Shoppe</span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
