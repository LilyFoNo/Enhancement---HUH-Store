import React, { useEffect, useState, useRef } from "react";

import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import LandingPage from "./components/LandingPage/LandingPage.js";

import DesireToFly from "./components/producttodisplay/product/DesireToFly.js";
import NotForYou from "./components/producttodisplay/product/NotForYou.js";

import "./App.css";

import { AiFillShopping } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

import SidePanel from "./components/SidePanel/SidePanel.js";
import { useSelector, useDispatch } from "react-redux";
import { setCartIsOpen } from "../src/features/counter/cartSlice.js";
import ViewCart from "./components/ViewCart/ViewCart.js";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";

toast.configure();

function App() {
  const dispatch = useDispatch();
  const { CartIsOpen: sidePanel } = useSelector((state) => state.cart);
  const [navOpened, setNavOpen] = useState(false);

  const openNavBarRef = useRef();
  const sidePanelRef = useRef();
  const navigate = useNavigate();

  const setNavbarColor = useSelector((state) => state.navbar.color);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const fnfSectionRef = useRef(null);
  const scrollToFnFSection = () => {
    navigate("/", { state: { targetId: "fnfSection" } });
  };

  const handleNavOutsideClick = (e) => {
    if (!openNavBarRef?.current?.contains(e.target)) {
      setNavOpen(false);
    }
  };

  const handlePanelOutsideClick = (e) => {
    if (!sidePanelRef?.current?.contains(e.target)) {
      dispatch(setCartIsOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleNavOutsideClick);
    document.addEventListener("mousedown", handlePanelOutsideClick);

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    //Scroll Down and Up Button
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        window.scrollBy({ top: 100, behavior: "smooth" });
      } else if (event.key === "ArrowUp") {
        window.scrollBy({ bottom: 100, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleNavOutsideClick);
      document.removeEventListener("mousedown", handlePanelOutsideClick);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <ScrollToTop />

      {/* Navbar */}
      <nav className="navbar">
        {navOpened ? (
          <div ref={openNavBarRef} className="openNavBar">
            <ul className="navElements">
              <Link
                style={{ textDecoration: "none" }}
                className="navBtn"
                to="/"
                onClick={() => setNavOpen(false)}
              >
                <h2>Home</h2>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="navBtn"
                to="/desiretofly"
                onClick={() => setNavOpen(false)}
              >
                <h2>Desire to fly</h2>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="navBtn"
                to="/notforyou"
                onClick={() => setNavOpen(false)}
              >
                <h2>Not for you</h2>
              </Link>
              <h2
                style={{ textDecoration: "none" }}
                className="navBtn fnfBtn"
                onClick={() => {
                  setNavOpen(false);
                  scrollToFnFSection();
                }}
              >
                Friends & Family
              </h2>
            </ul>
          </div>
        ) : (
          <HiMenuAlt4
            size={window.innerWidth <= 700 ? 30 : 40}
            className="hiMenu"
            style={{ fill: setNavbarColor, transition: "1s all ease" }}
            onClick={() => {
              setNavOpen(!navOpened);
            }}
          />
        )}
        {(navOpened && screenSize.width < 430) || (
          <AiFillShopping
            className="shoppingCartIcon"
            size={window.innerWidth <= 700 ? 30 : 40}
            style={{ fill: setNavbarColor, transition: "1s all ease" }}
            onClick={() => {
              dispatch(setCartIsOpen(!sidePanel));
            }}
          />
        )}
      </nav>

      <SidePanel
        sidePanelOpen={sidePanel}
        setSidePanelOpen={dispatch(setCartIsOpen)}
        sidePanelRef={sidePanelRef}
      />

      <Routes>
        <Route
          path="/"
          element={<LandingPage fnfSectionRef={fnfSectionRef} />}
        />
        <Route path="/desiretofly" element={<DesireToFly />} />
        <Route path="/notforyou" element={<NotForYou />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      
    </div>
  );
}
export default App;
