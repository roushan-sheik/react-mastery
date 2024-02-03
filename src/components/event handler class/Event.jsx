import React, { useState } from "react";

function Event() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <h2>{inputValue}</h2>
    </>
  );
}

export default Event;
