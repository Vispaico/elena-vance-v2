// src/components/layout.js
import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/global.css'; // Make sure you have a global.css file in src/styles

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 2rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;