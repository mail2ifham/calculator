import React from "react";
import Button from "./Button";
import keydata from "./kayData"

function KeyPad() {

  return (
    <div className="key-pad-container">
      {/* <Button btnText={1}/> */}
      <ul>
      {
       ( keydata.map(key=>
          <Button btnText={key.text}/>
          
          
        ))
      }
      </ul>
      {/* <input type="text"onKeyDown={e=>console.log(e.keyCode)} /> */}
    </div>
  );
}

export default KeyPad;
