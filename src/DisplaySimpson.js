import React from "react";

//template to display the information about the selected character
const DisplaySimpson = ({ mySimpson }) => {
  return (
    <div>
      <img src={mySimpson.image} alt="Your favorite simpson character" />
      <ul>
        <li>
          <i> "{mySimpson.quote}" </i>
        </li>
        <li> By {mySimpson.character} </li>
      </ul>
    </div>
  );
};

export default DisplaySimpson;
