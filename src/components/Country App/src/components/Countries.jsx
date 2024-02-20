import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = (props) => {
  return (
    <section className=" lg:p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {props.countries.map((country) => {
        // make a new country object
        const newCountry = { country, id: uuidv4() };
        return (
          <Country
            handleRemoveCountry={props.handleRemoveCountry}
            {...newCountry}
            key={newCountry.id}
          />
        );
      })}
    </section>
  );
};

export default Countries;
