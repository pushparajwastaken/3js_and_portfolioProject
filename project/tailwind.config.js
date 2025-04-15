/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files inside /src with js/ts extensions
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors (optional)
        primary: "#1E40AF", // Example blue
        secondary: "#F43F5E", // Example pink
      },
      fontFamily: {
        // Add custom fonts here
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
