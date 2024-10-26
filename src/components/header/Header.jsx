import React, { useEffect } from "react";
import ToggleButton from "./ToggleButton";

function Header() {

  return (
    <div className="header-container">
      <h1>calc</h1>
      <p>theme</p>
      <ToggleButton />
    </div>
  );
}

export default Header;
