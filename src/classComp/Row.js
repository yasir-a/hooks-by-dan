import React from "react";
import "./Row.css";
const Row = (props) => {
  return (
    <div className="row">
      <label className="label">{props.label}</label>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Row;
