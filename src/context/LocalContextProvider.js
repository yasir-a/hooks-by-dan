import React, { Component } from "react";

const LocalContext = React.createContext();
const LocalConsumer = LocalContext.Consumer;
class LocalContextProvider extends Component {
  state = {
    language: "English",
  };
  render() {
    return (
      <LocalContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </LocalContext.Provider>
    );
  }
}

export { LocalContextProvider, LocalContext, LocalConsumer };
