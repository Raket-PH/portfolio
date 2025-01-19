/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",    // For HTML files in the root directory
    "./**/*.html", // For HTML files in subdirectories (e.g., src, public)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
