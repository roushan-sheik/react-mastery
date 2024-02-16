import React from "react";
import useFetch from "./useFetch";
const FetchAPICustom = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div className="p-6 ">
      <h2 className="text-3xl">Todos</h2>
      <div>
        {loading && <h1 className="text-3xl font-bold">Loading...</h1>}
        {error && <h2 className="text-red-500 text-2xl">{error}</h2>}
        {data &&
          data.map((todo) => {
            return <h3 key={todo.id}>{todo.title}</h3>;
          })}
      </div>
    </div>
  );
};

export default FetchAPICustom;
