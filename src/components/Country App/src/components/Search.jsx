import React, { useEffect, useState } from "react";

export default function Search(props) {
  const [searchText, setSearchText] = useState();
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);
  return (
    <div className="py-4">
      <input
        className="input input-bordered input-accent w-full max-w-xs"
        type="text"
        placeholder="Type here"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
