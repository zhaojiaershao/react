import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

export default class Html extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', background: 'green' }}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
