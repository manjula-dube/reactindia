import React, { Component } from "react";
import { Hero } from "../../components/home";
import Header from "../../components/header";
import Section from "../../components/section";

export default class HomePage extends Component {
  static stop() {
    // TODO: stop
  }

  render() {
    return (
      <div className="uk-position-relative" style={{ height: '100vh'}}>
        <Header key="header" />
        <Hero />
      </div>
    );
  }
}
