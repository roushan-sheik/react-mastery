import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn btn-primary">
        Increment
      </button>
    </div>
  );
};

export default Usestate;
