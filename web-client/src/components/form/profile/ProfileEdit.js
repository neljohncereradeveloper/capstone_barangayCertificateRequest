import React from "react";
import { Formik, Form } from "formik";
import FieldsInformations from "./FieldsInformations";
import moment from "moment";
import form from "../../../assets/css/account/form.module.css";

const ProfileEdit = ({ handleSubmit, data }) => {
  const [state] = React.useState({
    fullName: data.data.fullName,
    age: data.data.age,
    gender: data.data.gender,
    birthDate: moment(data.data.birthDate).format("YYYY-MM-DD"),
    address: data.data.address,
    civilStatus: data.data.civilStatus,
  });
  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <Form className={form.container}>
              <div className="user">
                <FieldsInformations />
              </div>
              <div className="button-group">
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default ProfileEdit;
