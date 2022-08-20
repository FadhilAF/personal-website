import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  //dan ditambah file ini di dist folder: https://stackoverflow.com/a/68096312/13673444, biar biso akses netlify lewat url
  plugins: [react(), svgr()],
});
