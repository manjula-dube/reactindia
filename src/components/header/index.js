import React from "react";
import { toggleLeft } from "@crystallize/react-layout";

const Header = () => (
  <nav key="header">
    <button onClick={() => toggleLeft} type="button">Toggle Left</button>
    <p>Header</p>
  </nav>
);

export default Header;
