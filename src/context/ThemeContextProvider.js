import React, { Component } from "react";

export const ThemeContext = React.createContext();
export const ThemeContextConsumer = ThemeContext.Consumer;

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }
  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "dark" ? "light" : "dark",
      };
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
