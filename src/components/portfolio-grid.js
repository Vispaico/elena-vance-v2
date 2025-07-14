// src/components/portfolio-grid.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import * as styles from './portfolio-grid.module.css';

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const PortfolioGrid = () => {
  const data = useStaticQuery(graphql`
    query PortfolioQueryV2 {
      allFile(
        filter: {sourceInstanceName: {eq: "portfolio"}}
        sort: {name: ASC}
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          id
        }
      }
    }
  `);

  return (
    <div className={styles.grid}>
      {data.allFile.nodes.map(node => (
        <motion.div
          key={node.id}
          className={styles.gridItem}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <GatsbyImage
            image={getImage(node.childImageSharp.gatsbyImageData)}
            alt="Elena Vance portfolio piece"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioGrid;