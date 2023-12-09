// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       extend: {
//         colors: {
//           primary: '#53B175', 
//           secondary: '#2ecc71', 
//         },
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
        primary: '#6FAE79', 
        secondary: '#2ecc71', 
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: true,
}

