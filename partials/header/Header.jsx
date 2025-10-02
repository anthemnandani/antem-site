"use client";

import { Fragment, useState, useEffect } from "react";

import axios from "axios";
import NewNavBar from "@/components/NavBar/newNavBar";
import MobileMenu from "@/components/NavBar/MobileMenu";
import MainSearch from "@/components/NavBar/MainSearch";
import Logo from "@/components/logo/Logo";
import UtilityNavbar from "./UtilityNavbar";

const Header = () => {
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [searchbarShow, setSearchbarShow] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [bgColor, setBgColor] = useState("white");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle dark mode based on system preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Sticky header
  useEffect(() => {
    const header = document.querySelector(".header-section");
    if (header) setHeaderTop(header.offsetTop);

    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update background color based on dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateBackgroundColor = (e) => {
      setBgColor(e.matches ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.8)");
    };

    updateBackgroundColor(mediaQuery);
    mediaQuery.addEventListener("change", updateBackgroundColor);

    return () => mediaQuery.removeEventListener("change", updateBackgroundColor);
  }, []);

  // Fetch token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/Home/GetTokenForAllAPI?tokenn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiUmFtYW4gS3VtYXIiLCJuYmYiOjE3MTM0OT`
        );
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToken();
  }, []);

  return (
    <Fragment>
      <div
        className={`header-section header-transparent sticky-header section ${
          scroll > headerTop ? "is-sticky" : ""
        }`}
      >
        <div className="menu-column-area d-none d-xl-block">
          <UtilityNavbar />
        </div>

        <div className="header-inner" style={{ backgroundColor: bgColor }}>
          <div className="container position-relative">
            <div className="row justify-content-between align-items-center position-static">
              <div className="col-xl-4 col-sm-4 col-auto order-0">
                <Logo
                  image={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}/images/logo/logo.webp`}
                  alt="anthem infotech logo"
                />
              </div>

              <div className="col-auto col-xl-8 col-sm-4 d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                <div className="menu-column-area d-none d-xl-block">
                  <NewNavBar />
                </div>

                <div
                  className={`header-mobile-menu-toggle d-xl-none ms-sm-2 ${
                    isDarkMode ? "dark-mode-logo" : "light-mode-logo"
                  }`}
                >
                  <button
                    type="button"
                    aria-label="Toggle menu"
                    className="toggle"
                    onClick={() => setOffcanvasShow((prev) => !prev)}
                  >
                    <i className="icon-top"></i>
                    <i className="icon-middle"></i>
                    <i className="icon-bottom"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MobileMenu show={offcanvasShow} onClose={() => setOffcanvasShow(false)} /> */}
      {/* <MainSearch show={searchbarShow} onClose={() => setSearchbarShow(false)} /> */}
    </Fragment>
  );
};

export default Header;