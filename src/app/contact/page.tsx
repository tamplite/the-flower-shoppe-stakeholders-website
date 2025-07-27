import Header from '@/components/header';
import Footer from '@/components/footer';
import { Fragment } from 'react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-flower-green leading-tight">
            Contact TresPies Design Studio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss your vision for "The Flower Shoppe."
          </p>
        </section>

        <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-flower-light-pink">
          <h2 className="text-3xl font-bold text-flower-pink mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-flower-pink"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-flower-pink"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-flower-pink"
                placeholder="Inquiry about The Flower Shoppe project"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-flower-pink resize-y"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-flower-green text-white text-lg font-semibold rounded-full shadow-lg hover:bg-flower-dark-green transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-flower-green"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 mt-6 text-center">
            (Note: This is a placeholder form. Actual submission functionality will be implemented in a later phase or upon request.)
          </p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-flower-green mb-4">Other Ways to Connect</h2>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:contact@trespies.com" className="text-flower-pink hover:underline">contact@trespies.com</a>
          </p>
          <p className="text-lg text-gray-700">
            Phone: <a href="tel:+15551234567" className="text-flower-pink hover:underline">(555) 123-4567</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
