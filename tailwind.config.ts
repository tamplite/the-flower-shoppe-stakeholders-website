/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // The Flower Shoppe's Brand Colors
        'flower-pink': '#FF69B4', // Hot Pink
        'flower-green': '#228B22', // Forest Green
        'flower-light-pink': '#FFC0CB', // Light Pink
        'flower-dark-green': '#006400', // Dark Green

        // TresPies Accent Colors (from logo)
        'tres-coral': '#FF6B6B',
        'tres-yellow': '#FFD166',
        'tres-teal': '#4ECDC4',
        'tres-dark-teal': '#1A535C',
        'tres-red': '#C70039',
        'tres-crimson': '#900C3F',

        // Base colors for UI elements
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      // Adding custom font family if needed, e.g., 'Inter' or specific brand font
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example, ensure 'Inter' is imported in globals.css or similar
      },
    },
  },
  plugins: [],
}
