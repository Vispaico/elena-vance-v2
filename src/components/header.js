// src/components/header.js
import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          Elena Vance
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Portfolio</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;