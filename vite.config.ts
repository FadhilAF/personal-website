import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  //harus add base url vite nyo, biar gek kalo akses websitenyo biso langsung dari url, dk perlu tombol nian
  base: "/",
  plugins: [react(), svgr()],
});
