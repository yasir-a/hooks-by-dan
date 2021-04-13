import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import "./RowF.css";
const RowF = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`row-${theme}`}>
      <label className="label">{props.label}</label>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default RowF;
