import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-flower-green text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright and Contact Info */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} The Flower Shoppe. All rights reserved.</p>
          <p className="text-sm">Powered by TresPies Design Studio.</p>
        </div>

        {/* TresPies Brand Name (Text-based) */}
        <div className="mb-4 md:mb-0">
          <Link href="https://your-trespies-portfolio.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-flower-light-pink transition-colors">
            TresPies Design Studio
          </Link>
        </div>

        {/* Quick Links */}
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li><Link href="/privacy" className="hover:text-flower-light-pink transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-flower-light-pink transition-colors">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
