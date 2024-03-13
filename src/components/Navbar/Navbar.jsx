import React from "react";
import SwitchLang from "../langButton/SwitchLang";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the value (e.g., 100) based on when you want the effect to trigger
      if (scrollPosition > 120) {
        setScrolling(scrollPosition > prevScrollPos);
      } else {
        setScrolling(false);
      }

      // Update the previous scroll position
      setPrevScrollPos(scrollPosition);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <nav
      // className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${
        scrolling ? "header-hidden" : ""
      }`}
      aria-label="Offcanvas navbar large"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <p className="h2">Yusof.Click</p>
        </a>
        <SwitchLang />
      </div>
    </nav>
  );
};

export default Navbar;
