import React, { Component } from "react";
import { Hero } from "../../components/home";
import Header from "../../components/header";

export default class HomePage extends Component {
  static stop() {
    // TODO: stop
  }

  render() {
    return (
      <div class="uk-position-relative" style={{ height: '100vh'}}>
        <Header key="header" />
        <Hero />
      </div>
    );
  }
}
