import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "../header";
import Footer from "../footer";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line
  }

  static onWindowChange() {
    // TODO:
  }

  render() {
    const { children } = this.props;
    return (
      <div className="uk-width-1-1 uk-position-relative">
        {children}
        <Footer />
      </div>
    );
  }
}
