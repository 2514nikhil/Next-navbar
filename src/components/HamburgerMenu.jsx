"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-toggle"
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <nav className="mobile-menu open">
          <ul className="mobile-nav-links">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/connect" onClick={() => setIsOpen(false)}>
                Connect
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
