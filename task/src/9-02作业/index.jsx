import React, { Component, Fragment } from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';

export default class Html extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Banner />
      </Fragment>
    );
  }
}
