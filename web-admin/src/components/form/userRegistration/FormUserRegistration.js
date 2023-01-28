import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  FieldsUserInformation,
  FieldsAddress,
  FieldsAccount,
  FieldsHousehold,
} from "./";
import { validate_userRegistration } from "../validations";
import { ArrowBackIcon } from "../../../assets/icons";

const FormUserRegistration = ({ handleSubmit }) => {
  let history = useHistory();

  return (
    <>
      <Formik
        initialValues={{
          barangayID_no: "",
          houseHoldID_no: "",
          houseHold_role: "",
          fullName: "",
          age: 0,
          gender: "",
          birthDate: new Date(),
          birthPlace: "",
          civilStatus: "",
          address: "",
          userName: "",
          password: "password",
        }}
        validationSchema={validate_userRegistration}
        onSubmit={(values) => {
         
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <Form>
              <h4>User Registration</h4>
              <div className="user__registration-container">
                <FieldsHousehold />
              </div>
              <div className="user__registration-container">
                <FieldsUserInformation />
              </div>
              <div className="user__registration-container">
                <FieldsAddress />
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
