import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/flower-hero-placeholder.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Cultivating Digital Growth for <br className="hidden md:inline"/>The Flower Shoppe
            </h1>
            <p className="mt-4 text-lg md:text-xl text-flower-light-pink max-w-3xl drop-shadow-md">
              TresPies Design Studio: Crafting bespoke online experiences that blossom into success.
            </p>
            <Link href="/plan" className="mt-8 px-8 py-3 bg-flower-pink text-white text-lg font-semibold rounded-full shadow-lg hover:bg-flower-light-pink transition-colors duration-300">
              Explore Our Strategic Plan
            </Link>
          </div>
        </section>

        {/* Introduction Section - Refreshed Copy */}
        <section className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-flower-green mb-8">Your Vision, Our Strategic Approach, Unmatched Results</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At TresPies Design Studio, we are dedicated to transforming "The Flower Shoppe" into a thriving digital destination. We understand the unique essence of your local business and are committed to extending its charm and specialized offerings seamlessly into the online world. This website presents our meticulously crafted strategy to build a robust, aesthetically captivating, and highly functional e-commerce platform, precisely engineered to meet your distinct needs and exceed expectations.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-flower-light-pink">
              <h3 className="text-xl font-semibold text-flower-green mb-3">Grounded Creativity</h3>
              <p className="text-gray-600 text-base">
                We blend innovative design with rock-solid technical foundations, ensuring your digital presence is not just beautiful, but also reliable and intuitive for every customer.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-flower-light-pink">
              <h3 className="text-xl font-semibold text-flower-green mb-3">Strategic Growth</h3>
              <p className="text-gray-600 text-base">
                Our comprehensive, phased development plan guides "The Flower Shoppe" from initial market buzz to advanced operational efficiency, ensuring sustainable and scalable growth.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-flower-light-pink">
              <h3 className="text-xl font-semibold text-flower-green mb-3">Seamless Integration</h3>
              <p className="text-gray-600 text-base">
                We connect your online store with your existing physical operations, enabling real-time inventory synchronization and streamlined delivery management for unparalleled efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-flower-light-pink py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-flower-green mb-6">Ready to See Your Business Flourish?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dive deeper into our detailed development plan and discover how TresPies Design Studio can help "The Flower Shoppe" achieve its full digital potential.
          </p>
          <Link href="/why-us" className="mt-8 px-8 py-3 bg-flower-green text-white text-lg font-semibold rounded-full shadow-lg hover:bg-flower-dark-green transition-colors duration-300">
            Discover Our Partnership Approach
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
