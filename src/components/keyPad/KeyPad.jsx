import React, { useEffect, useCallback} from "react";
import Button from "./Button";
import keyData from "./kayData";

function KeyPad({ value, setValue,charCountRef }) {

  // handle what happens on key press
  const handleKeyPress = useCallback((event) => {
    
    keyData.forEach(key => {
      if (event.key === key.value) {
        const element =document.querySelector(`.key-${key.id} > button`) 
        element.focus();
        element.click();
      }
    })
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="key-pad-container">
      <ul className="key-layout">
        {/* create buttons from local data */}
        {keyData.map((key) => (
          <Button
            btnText={key.text}
            key={key.id}
            id={key.id}
            keyValue={key.value}
            btnType={key.buttonType}
            value={value}
            setValue={setValue}
            keyCode={key.keyCode}
            handleKeyPress={handleKeyPress}
            charCountRef={charCountRef}
          />
        ))}
      </ul>
    </div>
  );
}

export default KeyPad;
