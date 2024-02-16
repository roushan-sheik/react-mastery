import React, { useState } from "react";

const Faq = ({ id, question, answer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className="bg-gray-100 p-4 my-4 ">
      <div className="flex justify-between ">
        <h2 className="font-bold text-[20px]">{question}</h2>
        <div>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="btn btn-outline btn-secondary text-[20px]"
          >
            {toggle ? "X" : "+"}
          </button>
        </div>
      </div>
      <div>{toggle && <p>{answer}</p>}</div>
    </article>
  );
};

export default Faq;
