/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        'location': 'url("../../assets/icons/supplier_location.png")',
      },
    },
  },
  plugins: [],
}

