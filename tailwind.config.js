module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h2: {
              marginTop: '2em',
              marginBottom: '1em',
            },
            'ul > li': {
              paddingLeft: '1.5em',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li::before': {
              backgroundColor: '#4299e1',
            },
            blockquote: {
              borderLeftColor: '#4299e1',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
