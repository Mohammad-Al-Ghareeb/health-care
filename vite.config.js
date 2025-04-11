import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      boxShadow: {
        left: "11px 0 15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
