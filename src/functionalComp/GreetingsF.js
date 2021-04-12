import React, { useState } from "react";
import RowF from "../functionalComp/RowF";
import "../functionalComp/RowF.css";
const GreetingsF = () => {
  const [name, setName] = useState("Mary");

  const handleFirstnameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <section>
      <RowF label="name">
        <input type="text" value={name} onChange={handleFirstnameChange} />
      </RowF>
    </section>
  );
};

export default GreetingsF;
