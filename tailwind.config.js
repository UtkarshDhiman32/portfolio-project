// // tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         preahvihear: ['"Preahvihear"', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }


// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {

//       fontFamily: {
//         preahvihear: ['"Preahvihear"', 'sans-serif'],
//       },

//       // animation: {
//       //   'spin-slow': 'spin 15s linear infinite', // Ring ghumne ke liye
//       //   'reverse-spin': 'reverse-spin 15s linear infinite', // Icons ko seedha rakhne ke liye
//       //   'float': 'float 6s ease-in-out infinite', // Upar wale icons ke liye
//       // },

//       //   keyframes: {
//       //   'reverse-spin': {
//       //     from: { transform: 'rotate(0deg)' },
//       //     to: { transform: 'rotate(-360deg)' },
//       //   },
//       //   float: {
//       //     '0%, 100%': { transform: 'translateY(0)' },
//       //     '50%': { transform: 'translateY(-20px)' }, // 20px upar jayega
//       //   }
//       // }

//       animation: {
//         'spin-slow': 'spin 15s linear infinite', // Dheere ghumne ke liye
//       }


//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ['"Preahvihear"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite', // Ring ghumane ke liye
        'reverse-spin': 'reverse-spin 20s linear infinite', // Icons ko seedha rakhne ke liye
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
