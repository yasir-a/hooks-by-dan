import React from "react";
import "./RowF.css";
const RowF = (props) => {
  return (
    <div className="row">
      <label className="label">{props.label}</label>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default RowF;
