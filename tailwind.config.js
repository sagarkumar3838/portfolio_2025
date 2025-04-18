const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/**/*.{js,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {

    screens: {
    'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'hd': '1080px', // Custom breakpoint at 1080px
    },



    extend: {
      fontFamily:["Oswald" , "sans-serif" , "Playwrite IS", "Nunito", "Poppins", "Roboto"],
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        border: {
          to: { '--border-angle': '360deg' },
        },
      },
      animation: {
        border: 'border 4s linear infinite',
      },
    },
  },
  plugins: [addVariablesForColors],
 
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}






