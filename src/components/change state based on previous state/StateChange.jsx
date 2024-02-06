import React, { useState } from "react";

export default function StateChange() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick} className="btn btn-primary">
        Increment
      </button>
    </div>
  );
}
