import React from 'react';

import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/NavBar';

import { rowOne, rowTwo, rowThree } from './components/Content/data';

import GlobalStyle from './styles/global';
import Footer from './components/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Content {...rowOne} />
      <Content {...rowTwo} />
      <Content {...rowThree} />
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
}
