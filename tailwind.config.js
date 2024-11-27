/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Desactiva o reset de Tailwind para evitar conflitos com o Taiga
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "mountain-meadow": {
          50: "#eafff7",
          100: "#cdfee9",
          200: "#a0fad8",
          300: "#63f2c5",
          400: "#25e2ad",
          500: "#00bd8e",
          600: "#00a47c",
          700: "#008367",
          800: "#006753",
          900: "#005545",
          950: "#003028",
        },
        primary: {
          light: "#a0fad8", // Match com "mountain-meadow" 200
          DEFAULT: "#00bd8e", // Match com "mountain-meadow" 500
          dark: "#008367", // Match com "mountain-meadow" 700
        },
        success: "#00bd8e", // Reutiliza a cor padrão de sucesso
        error: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6",
      },
    },
  },
  plugins: [],
};
