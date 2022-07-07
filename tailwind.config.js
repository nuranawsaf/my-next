// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],

//   darkMode: 'media',
  


//   theme: {
//     spacing: {
//       '1': '8px',
//       '2': '12px',
//       '3': '16px',
//       '4': '24px',
//       '5': '32px',
//       '6': '48px',
//     },
//     colors: {
//       'black': '#171717',
//       'gray': '#A3A3A3',
//       'orange': '#FF914D',
//       'green': '#BED12B',
//       'white': '#F8FAFC',
//     },
//     container: {
//       center: true,
    
//     screens: {
//       'tablet': '640px',
//       // => @media (min-width: 640px) { ... }

//       'laptop': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'desktop': '1280px',
//       // => @media (min-width: 1280px) { ... }
//     },
//   },
// },
//   plugins: [],
// }

// module.exports = {
//   mode: "jit",
//   content: [
//     "./src/components/**/*.{ts,tsx,js,jsx}",
//     "./src/pages/**/*.{ts,tsx,js,jsx}",
//   ],
//   theme: {
//     spacing: {
//       '1': '8px',
//       '2': '12px',
//       '3': '16px',
//       '4': '24px',
//       '5': '32px',
//       '6': '48px',
//     },
//     colors: {
//       'black': '#171717',
//       'gray': '#A3A3A3',
//       'orange': '#FF914D',
//       'green': '#BED12B',
//       'white': '#F8FAFC',
//     },
//     container: {
//       center: true,
    
//     // screens: {
//     //   'tablet': '640px',
//     //   // => @media (min-width: 640px) { ... }

//     //   'laptop': '1024px',
//     //   // => @media (min-width: 1024px) { ... }

//     //   'desktop': '1280px',
//     //   // => @media (min-width: 1280px) { ... }
//     // },
//   },
// },
//   variants: {},
//   plugins: [],
// };


module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F8FAFC',
        orange: '#FF914D',
        green: '#BED12B',
        primary: "#1267E4",
        secondary: "#FF8717",
        tertiary: "#ED1C3D",
        black: "#07031F",
      },
      fontFamily: {
        lora: ["Lora"],
        inter: ["Inter"],
      },
    },
  },
  variants: {},
  plugins: [],
};