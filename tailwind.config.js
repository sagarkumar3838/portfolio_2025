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
      'sm': '640px', // Small devices (landscape phones, 640px and up)
      'md': '768px', // Medium devices (tablets, 768px and up)
      'lg': '1024px', // Large devices (desktops, 1024px and up)
      'xl': '1280px', // Extra large devices (large desktops, 1280px and up)
      '2xl': '1536px', // 2X extra large devices (larger desktops, 1536px and up)
    },



    extend: {},
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