import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Header key="header" />
        <main key="content">
          {children}
        </main>
        <Footer />
      </>
    );
  }
}
