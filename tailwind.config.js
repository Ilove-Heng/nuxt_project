/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'battambang': 'Battambang',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}

