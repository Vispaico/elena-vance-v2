// src/components/layout.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/global.css';

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;