import React from "react";

export const Hero = () => (
  <div
    className="uk-height-1-1 uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
    style={{ backgroundImage: `url('https://getuikit.com/docs/images/photo.jpg')`}}
  >
    <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 1,0; viewport: 0.5;">REACT INDIA</h1>
        <p uk-parallax="opacity: 1,0; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
);
