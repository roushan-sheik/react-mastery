import { useFormik } from "formik";
import { React } from "react";
// import { email, object, required, string } from "yup";
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
      name: yup
        .string("please provide strings")
        .required("name must required")
        .min(2, "name name must be greater than 2 characters"),
      email: yup.email("please provide valid email").required("required"),
      password: yup
        .required("required")
        .min(8, "password should be min 8 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert(values);
    },
  } );
  // 

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
