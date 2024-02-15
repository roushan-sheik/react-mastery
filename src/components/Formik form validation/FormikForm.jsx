import { useFormik } from "formik";
import { React } from "react";
import * as yup from "yup";
export default function FormikForm() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // We have a validation schema with formik to validate our field
    validationSchema: yup.object({
      name: yup.string().min(2).required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert(values);
    },
  });
  // Validation message
  let renderNameErrors = formik.touched.name && formik.errors.name && (
    <span className="text-red-500">{formik.errors.name}</span>
  );
  let renderEmailErrors = formik.touched.email && formik.errors.email && (
    <span className="text-red-500">{formik.errors.email}</span>
  );
  let renderPasswordErrors = formik.touched.password &&
    formik.errors.password && (
      <span className="text-red-500">{formik.errors.password}</span>
    );

  return (
    <div className="h-screen bg-gray-700 flex justify-center items-center w-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="h-[500px] w-[400px] bg-gray-300 p-6 rounded-md"
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
            className="input   input-bordered input-secondary  max-w-xs"
          />
        </div>
        <br />
        {/* // Validation Message */}
        {renderNameErrors}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={formik.handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
            type="email"
            name="email"
          />
        </div>
        <br />
        {/* // Validation Message */}
        {renderEmailErrors}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={formik.handleChange}
            className="input  input-bordered input-primary w-full max-w-xs"
            type="password"
            name="password"
          />
        </div>
        <br />
        {/* // Validation Message */}
        {renderPasswordErrors}
        <button type="submit" className="btn mt-4 w-full btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
