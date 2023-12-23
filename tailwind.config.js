/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary-50))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
        },
        neutrals: { 
          DEFAULT: "hsl(var(--neutrals-50))",
          50: "hsl(var(--neutrals-50))",
          100: "hsl(var(--neutrals-100))",
          200: "hsl(var(--neutrals-200))",
          300: "hsl(var(--neutrals-300))",
          400: "hsl(var(--neutrals-400))",
          500: "hsl(var(--neutrals-500))",
          600: "hsl(var(--neutrals-600))",
          700: "hsl(var(--neutrals-700))",
          800: "hsl(var(--neutrals-800))",
          900: "hsl(var(--neutrals-900))",
          916: "hsl(var(--neutrals-916))",
          932: "hsl(var(--neutrals-932))",
          950: "hsl(var(--neutrals-950))",
        },
        positive: {
          DEFAULT: "hsl(var(--positive-50))",
          50: "hsl(var(--positive-50))",
          100: "hsl(var(--positive-100))",
          200: "hsl(var(--positive-200))",
          300: "hsl(var(--positive-300))",
          400: "hsl(var(--positive-400))",
          500: "hsl(var(--positive-500))",
          600: "hsl(var(--positive-600))",
          700: "hsl(var(--positive-700))",
          800: "hsl(var(--positive-800))",
          900: "hsl(var(--positive-900))",
          950: "hsl(var(--positive-950))",
        },
        warning: { 
          DEFAULT: "hsl(var(--warning-50))",
          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          200: "hsl(var(--warning-200))",
          300: "hsl(var(--warning-300))",
          400: "hsl(var(--warning-400))",
          500: "hsl(var(--warning-500))",
          600: "hsl(var(--warning-600))",
          700: "hsl(var(--warning-700))",
          800: "hsl(var(--warning-800))",
          900: "hsl(var(--warning-900))",
          950: "hsl(var(--warning-950))",
        },
        negative: { 
          DEFAULT: "hsl(var(--negative-50))",
          50: "hsl(var(--negative-50))",
          100: "hsl(var(--negative-100))",
          200: "hsl(var(--negative-200))",
          300: "hsl(var(--negative-300))",
          400: "hsl(var(--negative-400))",
          500: "hsl(var(--negative-500))",
          600: "hsl(var(--negative-600))",
          700: "hsl(var(--negative-700))",
          800: "hsl(var(--negative-800))",
          900: "hsl(var(--negative-900))",
          950: "hsl(var(--negative-950))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        arca_majora: ["Arca-Majora", "sans-serif"],
        product_sans: ["Product-Sans", "sans-serif"],
        test_staff: ["Test-Staff", "sans-serif"],
        test_staff_x: ["Test-Staff-X", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}