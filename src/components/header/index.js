import React from "react";
import { toggleLeft } from "@crystallize/react-layout";

const Header = () => (
  <div className="uk-position-bottom">
    <nav className="uk-navbar-container uk-dark uk-padding-vertical uk-padding-remove-horizontal" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="#">ABOUT</a>
              </li>
              <li>
                  <a href="#">SPEAKERS</a>
              </li>
              <li>
                <a href="#">SCHEDULE</a>
              </li>
              <li>
                <a href="#">WORKSHOPS</a>
              </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <a href="" class="uk-navbar-item uk-logo">REACT INDIA</a>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">SPONSORS</a>
            </li>
            <li>
              <a href="#">VENUE</a>
            </li>
            <li>
              <a href="#">GALLERY</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
      </div>
    </nav>
  </div>
);

export default Header;
