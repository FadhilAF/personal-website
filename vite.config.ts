import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  //dan ditambah file ini di public folder: https://stackoverflow.com/a/68096312/13673444, biar biso akses netlify lewat url
  //kalo github page tidak support samo caro react router ngebuat route url nyo
  plugins: [react(), svgr()],
});
