import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "mediumseagreen",
};

const AppRoot = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children || null}
  </ThemeProvider>
);

AppRoot.propTypes = {
  children: PropTypes.any // eslint-disable-line
};

export default AppRoot;
