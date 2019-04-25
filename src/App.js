import React, { Component } from "react";
import "./App.css";
import SelectSimpson from "./SelectSimpson";
import DisplaySimpson from "./DisplaySimpson";

const defaultSimpson = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // set up the "testSimpson" as a default
      // in order to alsways have a character displayed
      mySimpson: defaultSimpson
    };
  }

  getSimpson() {
    //Collection of Simpson info via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(info => {
        console.log(info);
        //Once the data is collected, we update our state with the new data
        this.setState({
          mySimpson: info[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Do you know all the famous quotes from the Simpson?</h1>
        <h2>Click to discover if you're a true fan!</h2>
        <SelectSimpson selectChar={() => this.getSimpson()} />
        <DisplaySimpson mySimpson={this.state.mySimpson} />
      </div>
    );
  }
}

export default App;
