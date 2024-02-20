import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";

const Root = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountry, setFilterCountry] = useState(countries);
  // Create a fetchData function to fetch data
  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      setFilterCountry(data);
      setLoading(false);
      setError(null);
      // console.log(countries);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  // use useEffect hook to fetch data
  useEffect(() => {
    fetchData(url);
  }, []);
  // remove country
  function handleRemoveCountry(name) {
    const filterCountry = countries.filter(
      (country) => country.name.common !== name
    );
    setFilterCountry(filterCountry);
  }
  return (
    <main className="bg-gray-600 p-12 lg:p-4 ">
      <div>
        <h1 className="text-white pb-4 text-4xl font-bold py-4 text-center">
          Country App
        </h1>
      </div>
      <div className="text-white">
        <h2 className="text-center text-3xl font-bold">
          {loading && "Loading..."}
        </h2>
        <h2 className="text-3xl font-bold">{error && error}</h2>
      </div>
      <Countries
        handleRemoveCountry={handleRemoveCountry}
        countries={filterCountry}
      />
    </main>
  );
};

export default Root;
