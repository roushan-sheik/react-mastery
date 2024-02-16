import React from "react";
import { uuid } from "uuidv4";
import Country from "./Country";

const Countries = (props) => {
  console.log(props.countries);
  return (
    <section className=" p-4 bg-gray-50">
      {props.countries.map((country) => {
        // make a new country object
        const newCountry = { country, id: uuid() };
        return <Country {...newCountry} key={newCountry.id} />;
      })}
    </section>
  );
};

export default Countries;
