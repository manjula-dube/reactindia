import React from "react";
import PropTypes from "prop-types";

const Section = ({title, desc, children }) => (
  <div className="uk-section-default uk-section uk-section-primary">
    <div className="mn-Section--box">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>

    <div className="uk-width-1-1">
      {children}
    </div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.any
}

export default Section;
