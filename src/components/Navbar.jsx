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
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
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
