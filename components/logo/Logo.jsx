"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ image, width = 150, height = 50 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Optional: check app-specific dark mode from localStorage
  const appDarkMode = typeof window !== "undefined" && localStorage.getItem("appDarkMode");

  return (
    <div className="header-logo">
      <Link href="/">
          <Image
            src={image}
            alt="Anthem Infotech logo"
            width={width}
            height={height}
            className={isDarkMode ? "dark-mode-logo" : "light-mode-logo"}
            priority // similar to loading="eager"
          />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;