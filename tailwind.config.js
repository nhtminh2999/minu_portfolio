module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'source-san-pro': ['Source Sans Pro', 'sans-serif'],
        'ubuntu-mono': ['Ubuntu Mono', 'monospace'],
      },
      colors: {
        light: 'rgba(252, 246, 244, 1)',
        dark: 'rgba(0, 0, 0, 1)'
      },
      backgroundImage: {
        'about': "url('/images/cherry-blossom-drawing.png')",
        'skill': "url('/images/mountain-snow.png')",
        'skill': 'linear-gradient(to bottom, #b2fefa, #0ed2f7)'
      },
    },
    container: {
      center: true,
      padding: '15px',
    }
  },
  plugins: [],
};
