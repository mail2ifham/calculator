import React, { useReducer, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function ToggleButton() {
  const [theme, dispatch] = useLocalStorage("calTheme",{name:"dark-blue",value:"1"})

  useEffect(()=>{
    document.body.setAttribute('data-theme', theme.name)
  },[theme.name])

  return (

      <form className="toggle-btn-container">
        <datalist id="theme">
          <option  label="1"></option>
          <option  label="2"></option>
          <option label="3"></option>
        </datalist>
        <input className="toggle-switch"
          type="range"
          name="points"
          onChange={(e)=>dispatch({ type: e.target.value })}
          min="1"
          id="custom-toggle"
          max="3"
          list="theme"
          value={theme.value}
        />
      </form>

  );
}

export default ToggleButton;
