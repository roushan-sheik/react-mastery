import { React, useState } from "react";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, email, password } = user;
    let fieldName = e.target.name;
    if (fieldName === "name") {
      setUser({ name: e.target.value, email, password });
    } else if (fieldName === "email") {
      setUser({ name, email: e.target.value, password });
    } else if (fieldName === "password") {
      setUser({ name, email, password: e.target.value });
    }
  }
  // handle the form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="h-screen bg-gray-700 flex justify-center items-center w-screen">
      <form
        onSubmit={handleSubmit}
        className="h-[400px] w-[400px] bg-gray-300 p-6 rounded-md"
        action="#"
      >
        {/* inputs  */}
        <div>
          <label htmlFor="name" className=" ">
            Name:
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name.."
            name="name"
            className="input my-4  input-bordered input-secondary  max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            className="input my-4 input-bordered input-primary w-full max-w-xs"
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            className="input my-4 input-bordered input-primary w-full max-w-xs"
            type="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn w-full btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
