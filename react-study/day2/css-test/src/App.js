import React, { Component } from "react";
import Button from "./Button1";
import Box from "./Box3";

class App extends Component {
  render() {
    return (
      <div>
        <Button size="big"></Button>
        <Button size="small"></Button>
        <Box size="big"></Box>
        <Box size="small"></Box>
      </div>
    );
  }
}

export default App;
