import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [todos, setTodos] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/todos	";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <div className="p-6 ">
      <h2 className="text-3xl">Todos</h2>
      <div>
        {todos &&
          todos.map((todo) => {
            return <h3 key={todo.id}>{todo.title}</h3>;
          })}
      </div>
    </div>
  );
};

export default FetchAPI;
