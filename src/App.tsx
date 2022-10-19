import { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";
import { AuthContext } from "./Contexts/AuthContext";
import ScrollToTop from "./Components/CustomHooks/scrollToTop";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import FullBlog from "./Pages/Blog/FirstBlog/FirstBlog";
import Specials from "./Pages/Specials/SpecialsMainPage";
import Portfolio from "./Pages/Specials/Portfolio/Portfolio";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Admin from "./Pages/Admin/Admin";
import CheckAuth from "./Helpers/CheckAuth";
import CheckAdmin from "./Helpers/CheckAdmin";

function App() {
  const location = useLocation();

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches; //kalo misal lah ado settingan di browsernyo "prefer dark", langsung didefaultken dark
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const authCtx = useContext(AuthContext);
  const getAuthenticatedData = authCtx?.getAuthenticatedData;
  const userData = authCtx?.userData;
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  useEffect(() => {
    //kito dak biso ambek value cookie session, gara gara tipenyo HttpOnlyCookie T-T https://stackoverflow.com/a/37674900/13673444
    //demi menghindari xss, jadi kito buat be route baru untuk ngecek ado session apo idak di backendnyo be :v
    getAuthenticatedData &&
      getAuthenticatedData().then((res) => {
        if (res.axiosError) console.log(res.axiosError);
        if (res.error) console.log(res.error);
      });
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <Header path={location.pathname} theme={{ theme, setTheme }} />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="blog">
          <Route path="" element={<Blog />} />
          <Route path="read" element={<FullBlog />} />
        </Route>
        <Route path="specials">
          <Route path="" element={<Specials />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
        <Route element={<CheckAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<CheckAdmin />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer path={location.pathname} />
    </div>
  );
}

export default App;
