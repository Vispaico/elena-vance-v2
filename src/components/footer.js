// src/components/footer.js
import React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Elena Vance Photography. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;