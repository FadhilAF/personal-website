import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import ScrollToTop from "./Components/CustomHooks/scrollToTop";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import FullBlog from "./Pages/Blog/FirstBlog/FirstBlog";
import Specials from "./Pages/Specials/SpecialsMainPage";
import Login from "./Pages/Authentication/Login/Login";

function App() {
  const location = useLocation();

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches; //kalo misal lah ado settingan di browsernyo "prefer dark", langsung didefaultken dark
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="App" data-theme={theme}>
      <Header path={location.pathname} theme={{ theme, setTheme }} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/read" element={<FullBlog />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer path={location.pathname} />
    </div>
  );
}

export default App;
