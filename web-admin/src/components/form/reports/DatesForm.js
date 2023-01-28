import React from "react";
import { Formik, Form } from "formik";
import { validate_report_dates } from "../validations";
import { TextField } from "../TextField";

const DatesForm = ({ handleSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{
          fromDate: new Date(),
          toDate: new Date(),
        }}
        validationSchema={validate_report_dates}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <Form className="form__report">
              <TextField label="From date" name="fromDate" type="date" />
              <TextField label="End date" name="toDate" type="date" />
              <button className="btn btn-secondary" type="submit">
                Print Preview
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default DatesForm;
