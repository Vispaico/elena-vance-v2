// src/pages/about.js
import React from 'react';
import Layout from "../components/layout.js"
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '../styles/about.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <StaticImage
          src="../images/portfolio/photo-26.jpeg" 
          alt="A portrait of Elena Vance"
          className={styles.profileImage}
          placeholder="blurred"
        />
        <h1>Capturing Life, Frame by Frame</h1>
        <p>
          Hello, I'm Elena Vance. For as long as I can remember, I've seen the world in compositions. The fleeting glance between two people, the way golden-hour light spills over a cityscape, the quiet dignity of a forgotten landscape—these are the moments that tell our stories.
        </p>
        <p>
          Photography, for me, is not just about capturing a technically perfect image; it's about freezing an emotion. It's the art of observation, patience, and a deep-seated curiosity about the world around us. My approach is minimalistic and true to life, focusing on authentic moments and natural light to create images that are both timeless and deeply personal.
        </p>
        <p>
          Whether I'm working with individuals, brands, or capturing the spirit of a place, my goal is the same: to create a visual narrative that is honest, elegant, and evocative.
        </p>
        <p>
          Let's create something beautiful together.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
export const Head = () => <title>About | Elena Vance Photography</title>;