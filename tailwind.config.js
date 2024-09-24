module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      heading: "'Poppins', sans-serif",
      body: "'Poppins', sans-serif",
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      primary : '#1C1C65',
      secondary : '#2F2F8A',
      tertiary : '#C961DE',
      quaternary : '#2954A3',
      background: '#0F103F',
      black: '#000000',
      white: '#FFFFFF',
    },
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      screens: {
        xs: '500px',
      },
      dropShadow: {
        light: 'drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))',
      },backgroundColor: ['visited'],
    },
  },
  plugins: [],
};
