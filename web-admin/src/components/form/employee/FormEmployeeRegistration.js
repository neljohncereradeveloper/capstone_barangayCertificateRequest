import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import FieldsEmployeeInformation from "./FieldsEmployeeInformation";
import FieldsAccount from "./FieldsAccount";
import { validate_employeeRegistration } from "../validations";
import { ArrowBackIcon } from "../../../assets/icons";

const FormUserRegistration = ({ handleSubmit }) => {
  let history = useHistory();
  return (
    <>
      <Formik
        initialValues={{
          idnumber: "",
          fullname: "",
          contact: "",
          address: "",
          username: "",
          p_assword: "",
        }}
        validationSchema={validate_employeeRegistration}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <Form>
              <h4>Employee Registration</h4>
              <div className="user__registration-container">
                <FieldsEmployeeInformation />
              </div>
              <div className="user__registration-container">
                <FieldsAccount />
              </div>
              <div className="button-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <ArrowBackIcon />
                  Back
                </button>
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormUserRegistration;
