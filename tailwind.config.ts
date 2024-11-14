import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      colors: {
        breno: '#8257e6'
      },
    },
  },
  plugins: [],
} satisfies Config;
