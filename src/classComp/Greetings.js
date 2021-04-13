import React, { Component } from "react";
import { ThemeContextConsumer } from "../context/ThemeContextProvider";
import { LocalConsumer } from "../context/LocalContextProvider";
import Row from "./Row";
class Greetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mary",
      surname: "Poppins",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  render() {
    return (
      <ThemeContextConsumer>
        {({ theme, toggleTheme }) => {
          return (
            <section>
              <Row label="Name">
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Row>
              <Row label="Surname">
                <input
                  type="text"
                  value={this.state.surname}
                  onChange={this.handleSurnameChange}
                />
              </Row>
              <Row label="Theme">
                <p>{theme}</p>
                <button onClick={toggleTheme}>
                  {theme === "light" ? "dark" : "light"}
                </button>
              </Row>
              <LocalConsumer>
                {({ language }) => {
                  return (
                    <Row label="Language">
                      <p>{language}</p>
                    </Row>
                  );
                }}
              </LocalConsumer>
            </section>
          );
        }}
      </ThemeContextConsumer>
    );
  }
}

export default Greetings;
