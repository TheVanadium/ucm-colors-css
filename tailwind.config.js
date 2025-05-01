module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* https://github.com/TheVanadium/ucm-colors-css/
           v1.0 | 1 May 2025
           License: none (public domain)
        */
        // Primary
        'bobcat-blue': '#0F2D52',
        'bobcat-gold': '#DAA900',

        // Secondary
        'sierra-sky-blue': '#0091B3',
        'golden-wheat': '#FFBF3C',
        'deep-sky-blue': '#005487',
        'half-dome-slate': '#5B5B5B',
        'beginnings-medium-grey': '#E5E5E5',
        'beginnings-light-grey': '#EFEFEF',

        // Accent
        'accent-green': '#6BA43A',
        'accent-orange': '#F18A00',
        'accent-blue': '#99D9D9',
      },
    },
  },
  plugins: [],
}
