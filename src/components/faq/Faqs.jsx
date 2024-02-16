import React from "react";
import Faq from "./Faq";
import { FaqData } from "./data";
const Faqs = () => {
  return (
    <div className="bg-gray-600 container p-6 ">
      <h2 className="my-2 text-4xl text-center font-bold text-white">FAQ</h2>
      <section className=" flex justify-center">
        <br />
        <div className="w-1/2">
          {FaqData.map((faq) => (
            <Faq key={faq.id} {...faq} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faqs;
