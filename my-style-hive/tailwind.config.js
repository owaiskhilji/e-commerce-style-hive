/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      extend: {
        colors: {  // ✅ Custom colors yahan add honge
          textcolor: "#443627",  // Text color
          backgroundcolor: "#DFD7BF", // ✅ Tumhara background color
          hovercolor: "#FFD700"  // ✅ Tumhara hover color
        },
      },
    },
    plugins: [require("tw-elements/plugin.cjs")],
  };
  