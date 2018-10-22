import React, { Component } from "react";
import { Link } from "react-router-dom";

const supportsServiceWorker = function () {
  if (typeof window === "undefined") return false;
  return "serviceWorker" in window.navigator;
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supportsServiceWorker: false,
    };
  }

  componentDidMount() {
    if (supportsServiceWorker()) {
      this.setState({
        supportsServiceWorker: true,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="hero bg-primary p-5 row align-items-center justify-content-center">
            <div>
              <h1 className="d-sm-none">React PWA</h1>
              <p className="h4 text-uppercase">
                <small>Create</small>
                <br />
                <strong>Upgradable</strong>
                <br />
                <strong>SEO Friendly</strong>
                <br />
                <strong>Progressive web applications</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="mt-5 text-center">
            <span className="h4">Lets get started with 3 simple steps:</span>
          </p>
          <p className="mt-4">
            <i>
For more detailed instruction please visit
              <Link to="/docs">docs</Link>
            </i>
          </p>
        </div>
        <Link to="/test">Test</Link>
      </div>
    );
  }
}
