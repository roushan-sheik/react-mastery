import React from "react";

const Country = ({ country, handleRemoveCountry }) => {
  function handleRemoveClick() {
    handleRemoveCountry(country.name.common);
  }
  // destructure
  const { name, flags, capital, population, area } = country;
  return (
    <article className="bg-gray-50 p-4 rounded-md transition-all ease-in hover:scale-110">
      <div>
        <img src={flags.png} alt="" />
        <h2 className="text-[18px] font-bold  mt-2 py-1">
          {"Name: " + name.common}
        </h2>
        <h3>{"Capital: " + capital}</h3>
        <h3>{"Population: " + population}</h3>
        <h3>{"Area: " + area}</h3>
        <button onClick={handleRemoveClick} className="btn mt-3 btn-error">
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
