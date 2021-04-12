import React, { Component } from "react";
import Row from "./Row";
class Greetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mary",
    };
  }

  handleFirstnameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <section>
        <Row label="Name">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleFirstnameChange}
          />
        </Row>
      </section>
    );
  }
}

export default Greetings;
