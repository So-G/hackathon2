import React from 'react';
// Modules
import { AppProps } from 'next/app';
// CSS
import '../styles/main.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
