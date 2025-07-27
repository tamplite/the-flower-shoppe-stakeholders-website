import Header from '@/components/header'; // Ensure this path is correct
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Ensure Header is correctly rendered */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/flower-hero-placeholder.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Cultivating Digital Excellence for <br className="hidden md:inline"/>The Flower Shoppe
            </h1>
            <p className="mt-4 text-lg md:text-xl text-flower-light-pink max-w-3xl drop-shadow-md">
              A comprehensive plan to transform your local flower shop into the premier online destination.
            </p>
            <Link href="/plan" className="mt-8 px-8 py-3 bg-flower-pink text-white text-lg font-semibold rounded-full shadow-lg hover:bg-flower-light-pink transition-colors duration-300">
              Explore The Plan
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-flower-green mb-8">Your Vision, Our Expertise</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            TresPies Design Studio is committed to making "The Flower Shoppe" the best in town, not just physically, but digitally. We understand the unique charm of a local florist and aim to extend that experience seamlessly into the online realm. This website outlines our strategic approach to building a robust, beautiful, and highly functional e-commerce platform tailored to your needs.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-flower-light-pink">
              <h3 className="text-xl font-semibold text-flower-green mb-3">Grounded Creativity</h3>
              <p className="text-gray-600 text-base">
                Our approach blends artistic design with solid technical foundations, ensuring your digital presence is both beautiful and reliable.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-flower-light-pink">
              <h3 className="text-xl font-semibold text-flower-green mb-3">Strategic Growth</h3>
              <p className="text-gray-600 text-base">
                From initial buzz to advanced logistics, our phased plan is designed for scalable growth and continuous improvement.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-flower-light-pink">
              <h3 className="text-xl font-semibold text-flower-green mb-3">Seamless Integration</h3>
              <p className="text-gray-600 text-base">
                We connect your online store with your existing operations, ensuring real-time inventory and efficient delivery management.
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder for "Why Partner With Us" or other sections */}
        <section className="bg-flower-light-pink py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-flower-green mb-6">Ready to Grow?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our detailed development plan and discover how TresPies can help "The Flower Shoppe" flourish in the digital landscape.
          </p>
          <Link href="/why-us" className="mt-8 px-8 py-3 bg-flower-green text-white text-lg font-semibold rounded-full shadow-lg hover:bg-flower-dark-green transition-colors duration-300">
            Learn More About Our Partnership
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
