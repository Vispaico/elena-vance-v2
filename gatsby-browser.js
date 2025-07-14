// gatsby-browser.js
import React from 'react';
import Layout from './src/components/layout.js';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};