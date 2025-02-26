/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // React کے تمام فائلز کو اسکین کرے گا
    theme: {
      extend: {
        colors: {  // ✅ Custom colors yahan add honge
          textcolor: "#443627",  // Text color
          backgroundcolor: "#DFD7BF", // ✅ Tumhara background color
          hovercolor: "#FFD700"  // ✅ Tumhara hover color
        },
      },
    },
    plugins: [],
  };
  