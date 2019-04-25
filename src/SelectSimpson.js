import React from "react";

// button to select one Simpson name to get more info about this character
const SelectSimpson = ({ selectChar }) => {
  return (
    <div>
      <button onClick={selectChar}> Cliiiik </button>
    </div>
  );
};

export default SelectSimpson;
