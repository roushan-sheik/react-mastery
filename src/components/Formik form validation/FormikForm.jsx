import { useFormik } from "formik";
import { React } from "react";

export default function FormikForm() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(values);
    },
  });

  return (
    <div className="h-screen bg-gray-700 flex justify-center items-center w-screen">
      <form
        onSubmit={formik.handleSubmit}
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
            onChange={formik.handleChange}
            type="text"
            placeholder="Name.."
            name="name"
            className="input my-4  input-bordered input-secondary  max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={formik.handleChange}
            className="input my-4 input-bordered input-primary w-full max-w-xs"
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={formik.handleChange}
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
