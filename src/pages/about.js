// src/pages/about.js
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <StaticImage
        src="../images/portfolio/photo-26.jpeg" 
        alt="A portrait of Elena Vance"
        className={styles.profileImage}
        placeholder="blurred"
      />
      <h1>Capturing Life, Frame by Frame</h1>
      <p>Hello, I'm Elena Vance...</p>
      {/* ... other paragraphs ... */}
    </div>
  );
};

export default AboutPage;
export const Head = () => <title>About | Elena Vance Photography</title>;