import React, { useState, useContext } from "react";
import { LocalContext } from "../context/LocalContextProvider";
import { ThemeContext } from "../context/ThemeContextProvider";
import RowF from "../functionalComp/RowF";
import "../functionalComp/RowF.css";
const GreetingsF = () => {
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LocalContext);
  console.log(theme);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  return (
    <section>
      <RowF label="Name">
        <input type="text" value={name} onChange={handleNameChange} />
      </RowF>
      <RowF label="Surname">
        <input type="text" value={surname} onChange={handleSurnameChange} />
      </RowF>
      <RowF label="Theme">
        <p>{theme}</p>
        <button onClick={toggleTheme}>
          {theme === "light" ? "dark" : "light"}
        </button>
      </RowF>
      <RowF label="Language">
        <p>{language}</p>
      </RowF>
    </section>
  );
};

export default GreetingsF;
