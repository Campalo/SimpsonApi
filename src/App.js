import React from "react";
import "./App.css";
import SelectSimpson from "./SelectSimpson";
import DisplaySimpson from "./DisplaySimpson";

const testSimpson = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
};

function App() {
  return (
    <div className="App">
      <h1>Tell us your favourite Simpson character</h1>
      <h2>We'll tell you his.er best quote!</h2>
      <SelectSimpson />
      <DisplaySimpson mySimpson={testSimpson} />
    </div>
  );
}

export default App;
