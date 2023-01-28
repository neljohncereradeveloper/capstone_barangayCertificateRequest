import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import "../../assets/css/form.css";

const LoginForm = ({ handleSubmit }) => {
  const validate = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Password is Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <Form>
              <AccountCircleIcon />
              <h3>Login</h3>
              <TextField label="Username" name="username" type="text" />
              <TextField label="Password" name="password" type="password" />
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
