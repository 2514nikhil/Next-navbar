"use client";
import React from "react";
import Link from "next/link";
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        &lt; Passion | Dedication | Innovation /&gt;
      </div>
      <div className="navbar-center">
        <div className="navbar-center desktop-menu">
          <ul className="nav-buttons">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/connect">Connect</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
