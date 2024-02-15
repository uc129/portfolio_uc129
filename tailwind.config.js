/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ['5rem', '1.2'],
        h2: ['3rem', '1.2'],
        h3: ['2rem', '1.2'],
        h4: ['1.5rem', '1.2'],
        h5: ['1.25rem', '1.2'],
        h6: ['1rem', '1.2'],
        p: ['1rem', '1.2'],

      },
      fontFamily: {
        'cute': ['Cute Font'],
        'black-ops': ['Black Ops One'],
        'rubik': ['Rubik Mono One'],

      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      animationDuration: {
        '300': '300ms',
        '900': '900ms',
        '4000': '4000ms',

      },
      animationDelay: {
        '300': '300ms',
        '900': '900ms',
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
    animation: {
      rotate: 'rotate 18s linear infinite',
    }
  },
  plugins: [],
}




// @font-face {
//   font-family: 'Moret-Bold';
//   src: url('../public/assets/fonts/moret/Moret-Bold.otf') format('otf');
//   font-style: bold;
// };

// @font-face {
//   font-family: 'Moret-Book';
//   src: url('../public/assets/fonts/moret/Moret-Book.otf') format('otf');
//   font-style: thin;
// };


// @font-face {
//   font-family: 'Moret-Black';
//   src: url('../public/assets/fonts/moret/Moret-Extrabold.otf') format('otf');
//   font-style: bold;
// }


// @font-face {
//   font-family: 'Moret';
//   src: url('../public/assets/fonts/moret/Moret-Regular.otf') format('otf');
//   font-style: normal;
// }