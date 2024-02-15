/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'strong-cyan': '#26C2AE',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'grayish-cyan-1': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        "space-mono":["Space Mono", "monospace"],
      }
    },
  },
  plugins: [],
}

