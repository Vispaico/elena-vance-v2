// src/components/header.js
import React, { useState, useEffect } from 'react'; // 1. Import useState and useEffect
import { Link } from 'gatsby';
import * as styles from './header.module.css';

const Header = () => {
  // 2. State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. Effect to prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset the style when the component unmounts
    return () => document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    // Add a class to the header if the mobile menu is open
    <header className={`${styles.header} ${isMenuOpen ? styles.menuIsOpen : ''}`}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Elena Vance
        </Link>

        {/* The desktop navigation */}
        <nav className={styles.navDesktop}>
          <Link to="/">Portfolio</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </nav>

        {/* The hamburger button for mobile */}
        <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>
      </div>

      {/* The full-screen mobile navigation menu */}
      {isMenuOpen && (
        <nav className={styles.navMobile}>
          <Link to="/" onClick={closeMenu}>Portfolio</Link>
          <Link to="/about/" onClick={closeMenu}>About</Link>
          <Link to="/contact/" onClick={closeMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;