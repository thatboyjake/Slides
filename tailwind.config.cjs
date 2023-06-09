/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['JetBrains Mono']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

