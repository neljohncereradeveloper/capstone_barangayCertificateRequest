import React from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "../TextField";
import { DropdownField } from "../DropdownField";
import { Formik, Form } from "formik";
import { FieldsUserInformation, FieldsAddress } from "../userRegistration";
import { ArrowBackIcon } from "../../../assets/icons";

const UserEdit = ({ handleSubmit, data }) => {
  let history = useHistory();

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <Form>
              <h4>Edit User Account</h4>
              <div className="user__registration-container">
                <p>1. Household</p>
                <TextField
                  label="Household ID"
                  name="household_ID"
                  type="text"
                />
                <DropdownField label="Household role" name="householdrole">
                  <option value="">Role</option>
                  <option value="Member">Household Member</option>
                  <option value="Head">Household Head</option>
                </DropdownField>
              </div>
              <div className="user__registration-container">
                <FieldsUserInformation />
              </div>
              <div className="user__registration-container">
                <FieldsAddress />
              </div>
              <div className="user__registration-container">
                <TextField label="Username" name="username" type="text" />
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
                  Savesss
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default UserEdit;
