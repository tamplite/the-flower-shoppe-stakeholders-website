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
            Why TresPies is the Ideal Partner for The Flower Shoppe
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Unlocking digital potential through tailored strategies and dedicated collaboration.
          </p>
        </section>

        {/* Core Value Proposition Section - Refreshed Copy */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Deep Understanding & Tailored Solutions */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-flower-light-pink text-center">
              <h3 className="text-2xl font-bold text-flower-pink mb-4">Deep Market Insight</h3>
              <p className="text-gray-700">
                We don't just build websites; we craft digital experiences that resonate with your specific audience. Our understanding of local businesses and specialized product markets ensures "The Flower Shoppe" stands out.
              </p>
            </div>
            {/* Card 2: Strategic Partnership & Transparency */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-flower-light-pink text-center">
              <h3 className="text-2xl font-bold text-flower-pink mb-4">True Collaborative Partnership</h3>
              <p className="text-gray-700">
                TresPies operates on a foundation of transparency and open communication. Our phased approach, regular updates, and commitment to your feedback mean you're always part of the journey, every step of the way.
              </p>
            </div>
            {/* Card 3: Innovation & Scalability */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-flower-light-pink text-center">
              <h3 className="text-2xl font-bold text-flower-pink mb-4">Innovation for Lasting Growth</h3>
              <p className="text-gray-700">
                Leveraging cutting-edge technologies like Next.js and Firebase, we build scalable, robust platforms. Your website won't just meet today's demands; it will be engineered for future expansion and evolving market trends.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Overview Section - Remains the same */}
        <section className="bg-flower-light-pink py-12 px-4 rounded-lg shadow-md text-center mb-16">
          <h2 className="text-3xl font-bold text-flower-green mb-6">Your Investment in Digital Excellence</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Partnering with TresPies for "The Flower Shoppe's" digital transformation is a strategic investment in its future growth and market leadership. Our comprehensive plan ensures maximum value and a clear return on your digital presence.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-inner inline-block">
            <p className="text-4xl font-extrabold text-flower-pink">Estimated Project Investment:</p>
            <p className="text-5xl font-extrabold text-flower-green mt-2">$15,500</p>
            <p className="text-sm text-gray-500 mt-4">
              (This estimate covers all development phases, excluding ongoing third-party costs and future enhancements. See detailed contract for breakdown.)
            </p>
          </div>
        </section>

        {/* Call to Action Section - Remains the same */}
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
