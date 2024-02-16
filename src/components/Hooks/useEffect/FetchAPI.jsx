import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/todos	";
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // Check error
          if (!res.ok) {
            throw new Error("Could not fetch data.");
          }
          return res.json();
        })
        .then((data) => {
          setTodos(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, [2000]);
  }, []);
  return (
    <div className="p-6 ">
      <h2 className="text-3xl">Todos</h2>
      <div>
        {loading && <h1 className="text-3xl font-bold">Loading...</h1>}
        {error && <h2 className="text-red-500 text-2xl">{error}</h2>}
        {todos &&
          todos.map((todo) => {
            return <h3 key={todo.id}>{todo.title}</h3>;
          })}
      </div>
    </div>
  );
};

export default FetchAPI;
