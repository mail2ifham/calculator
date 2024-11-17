
function Display({ value,charCountRef }) {
  return (
    <div className="display-container">
      <p ref={charCountRef}>
        {/* convert the value to string and add ',' separator to thousands   */}
        {value.mainValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
        <span>
          {/* Add ',' separator to thousands   */}
          {value.mainValue|| value.mainValue == "0"
            ? (value.currentValue).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : (value.currentValue).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}
        </span>
      </p>
    </div>
  );
}

export default Display;


// meaning of regex

// \B: Matches a set of characters that are not at the beginning or end of a word 
// (?=(\d{3})+): Matches a sequence of three or more digits 
// (?!\d): Matches a sequence that does not end with a digit 
// g: A flag that specifies a global search, meaning the regex engine will search for all occurrences of the pattern in the input string 
