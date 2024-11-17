function Button({
  btnText,
  id,
  keyValue,
  value,
  setValue,
  btnType,
  charCountRef,
}) {
  function handleClick() {
    switch (btnType) {
      case "function":
        // delete the last digit
        if (btnText == "DEL") {
          let tempValue = value.mainValue + value.currentValue; // merge main and current value
          let tempTrimValue = tempValue.slice(0, -1); // get the trimmed value

          setValue({
            mainValue: tempTrimValue.slice(0, -1),
            currentValue: tempTrimValue.slice(-1),
          });
        }
        // reset the display
        if (btnText == "RESET") {
          setValue({ mainValue: "", currentValue: "" });
        }
        // evaluate
        if (btnText == "=") {
          // merge main and current value
          let tempTotal = value.mainValue + value.currentValue;
          //  if last digit is a operator remove the operator sign and set temTotal to new value
          if (isNaN(value.currentValue.slice(-1))) {
            tempTotal = value.mainValue + value.currentValue.slice(0, -1);
          }

          // evaluate
          let total = eval(tempTotal);
          // if total more than 15 digit limit the digits to 15
          if (total && total.toString().length > 15) {
            const tempSplit = total.split(".");
            setValue({
              mainValue: total.toFixed(13 - tempSplit[0]),
              currentValue: "",
            });
          } else {
            setValue({ mainValue: total, currentValue: "" });
          }
        }

        break;
      case "operation":
        // add current val to main val with operator sign
        // make currentVal ''
        // when current val is "" or operator sign, don't add the operator sign again

        if (
          charCountRef.current.innerText.length < 15 && // limit the display digits to 15
          value.currentValue != "" &&
          isNaN(value.currentValue.slice(-1)) // check last digit of current value is not a number
        ) {
          // TO AVOID CONTINUOUS OPERATOR SIGN
          let withOutlastDigit = value.currentValue.slice(0, -1);
          setValue({ ...value, currentValue: (withOutlastDigit += keyValue) });
        } else {
          value.currentValue == "" && value.mainValue == ""
            ? setValue(value)
            : setValue({
                mainValue: (value.mainValue += value.currentValue),
                currentValue: keyValue,
              });
        }
        break;

      case "digit":
        if (charCountRef.current.innerText.length < 15) {
          // limit the display digits to 15

          if (keyValue == "0" && value.currentValue == "") {
            //avoid multiple 0 at the beginnings
            setValue({ mainValue: "", currentValue: "" });
          } else if (
            // avoiding any leading zeros
            isNaN(value.currentValue.slice(-2, -1)) &&
            value.currentValue.slice(-2, -1) != "." &&
            value.currentValue.slice(-1) == 0
          ) {
            setValue({
              ...value,
              currentValue: value.currentValue.slice(0, -1) + keyValue,
            });
          } else {
            setValue({
              ...value,
              currentValue: (value.currentValue += keyValue),
            });
          }
        }
        break;

      case "specialChar":
        if (
          charCountRef.current.innerText.length < 15 && // limit the display digits to 15
          value.currentValue &&
          value.currentValue.includes(".") // avoid more then one '.' in the numbers
        ) {
          setValue(value);
        } else {
          value.currentValue == ""
            ? setValue({
                ...value,
                currentValue: "0" + keyValue,
              })
            : setValue({
                ...value,
                currentValue: (value.currentValue += keyValue),
              });
        }
        break;
      default:
        break;
    }
  }

  return (
    <li key={id} tabIndex={0} className={`button-container key-${id}`}>
      <button onClick={handleClick}>{btnText}</button>
    </li>
  );
}

export default Button;
