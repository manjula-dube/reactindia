import React from "react";

const Header = () => (
  <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
    <nav className="uk-navbar-container uk-dark uk-padding-vertical uk-padding-remove-horizontal" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="#about">ABOUT</a>
              </li>
              <li>
                  <a href="#speakers">SPEAKERS</a>
              </li>
              <li>
                <a href="#schedule">SCHEDULE</a>
              </li>
              <li>
                <a href="#">WORKSHOPS</a>
              </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <a href="" class="uk-navbar-item uk-logo">REACT INDIA 2019</a>
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
