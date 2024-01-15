// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#37B149', 
//         secondary: '#2ecc71', 
//       },
//     },
//   },
//   plugins: [],
//   corePlugins: {
//     preflight: false,
//   },
//   important: true,
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#37B149', 
        secondary: '#2ecc71', 
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '17px',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
};

