import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Contexts/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
); // baca https://stackoverflow.com/questions/70395443/deploying-vite-js-react-build-to-gh-pages
//tentang BrowserRouter
