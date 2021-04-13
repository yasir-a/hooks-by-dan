import React from "react";
import { ThemeContextConsumer } from "../context/ThemeContextProvider";
import "./Row.css";
const Row = (props) => {
  return (
    <ThemeContextConsumer>
      {({ theme }) => {
        return (
          <div className={`row-${theme}`}>
            <label className="label">{props.label}</label>
            <div className="content">{props.children}</div>
          </div>
        );
      }}
    </ThemeContextConsumer>
  );
};

export default Row;
