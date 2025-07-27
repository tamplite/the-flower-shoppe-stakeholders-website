import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Fragment } from 'react';

export default function WhyUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-flower-green leading-tight">
            Why Partner with TresPies for The Flower Shoppe?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Cultivating digital success through expertise, collaboration, and a shared vision.
          </p>
        </section>

        {/* Value Proposition Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Expertise & Specialization */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-flower-light-pink text-center">
              <h3 className="text-2xl font-bold text-flower-pink mb-4">Specialized Expertise</h3>
              <p className="text-gray-700">
                We understand the unique needs of local businesses and the nuances of specialized product markets. Our team brings targeted experience to ensure your digital presence truly reflects "The Flower Shoppe's" distinct charm.
              </p>
            </div>
            {/* Card 2: Collaborative Approach */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-flower-light-pink text-center">
              <h3 className="text-2xl font-bold text-flower-pink mb-4">Transparent Collaboration</h3>
              <p className="text-gray-700">
                At TresPies, we believe in a partnership, not just a service. Our phased approach, clear communication, and continuous feedback loops ensure you are always informed and in control.
              </p>
            </div>
            {/* Card 3: Scalable & Robust Solutions */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-flower-light-pink text-center">
              <h3 className="text-2xl font-bold text-flower-pink mb-4">Future-Proof Technology</h3>
              <p className="text-gray-700">
                We build with Next.js, Firebase, and modern APIs to create a foundation that is not only powerful today but also ready to scale and adapt to tomorrow's market demands.
              </p>
            </div>
          </div>
        </section>

        {/* High-Level Investment Section */}
        <section className="bg-flower-light-pink py-12 px-4 rounded-lg shadow-md text-center mb-16">
          <h2 className="text-3xl font-bold text-flower-green mb-6">Your Investment in Digital Excellence</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Investing in "The Flower Shoppe's" digital transformation is an investment in its future growth and market leadership. Our comprehensive plan ensures maximum value and a clear return on your digital presence.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-inner inline-block">
            <p className="text-4xl font-extrabold text-flower-pink">Estimated Project Investment:</p>
            <p className="text-5xl font-extrabold text-flower-green mt-2">$15,500</p> {/* This is the example total from the contract */}
            <p className="text-sm text-gray-500 mt-4">
              (This estimate covers all development phases, excluding ongoing third-party costs and future enhancements. See detailed contract for breakdown.)
            </p>
          </div>
        </section>

        {/* Testimonials/Case Studies (Placeholders) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-flower-green mb-8 text-center">What Our Partners Say (Coming Soon)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <p className="italic text-gray-700 mb-4">"TresPies transformed our vision into a stunning reality. Their collaborative approach was a game-changer."</p>
              <p className="font-semibold text-flower-pink">- [Partner Name, Business Name]</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <p className="italic text-gray-700 mb-4">"Professional, responsive, and truly understood our unique market. Highly recommend TresPies for any digital project."</p>
              <p className="font-semibold text-flower-pink">- [Partner Name, Business Name]</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-flower-green text-white py-12 px-4 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Cultivate Your Digital Future?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how TresPies can help "The Flower Shoppe" blossom online. Contact us today to schedule a detailed consultation.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-flower-pink text-white text-lg font-semibold rounded-full shadow-lg hover:bg-flower-light-pink transition-colors duration-300">
            Get in Touch
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
