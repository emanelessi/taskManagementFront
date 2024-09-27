module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {  fontFamily: {
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
        primary : '#F3F4F8',
        secondary : '#8C97A8',
        tertiary : '#5051F9',
        quaternary : '#94A2BC',
        black: '#23235F',
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
      dropShadow: {
        light: 'drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))',
      },backgroundColor: ['visited'],
    },
  },
  plugins: [],
};
