import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a default font
import './globals.css'; // Global CSS for Tailwind and base styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Flower Shoppe - Stakeholder Presentation',
  description: 'A comprehensive plan for developing The Flower Shoppe website by TresPies Design Studio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
