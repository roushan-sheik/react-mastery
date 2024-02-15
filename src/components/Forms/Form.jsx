import { React, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  // handle the form
  function handleSubmit(e) {
    e.preventDefault();
    let person = {
      name,
      email,
      password,
    };
    console.log(person);
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
            onChange={handleNameChange}
            type="text"
            placeholder="Name.."
            name="name"
            className="input my-4  input-bordered input-secondary  max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleEmailChange}
            className="input my-4 input-bordered input-primary w-full max-w-xs"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handlePasswordChange}
            className="input my-4 input-bordered input-primary w-full max-w-xs"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn w-full btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
