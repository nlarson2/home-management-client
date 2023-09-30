import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import * as dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "process.env.REACT_APP_CLERK_PUBLISHABLE_KEY": JSON.stringify(
        process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
      ),
    },
  };
});
