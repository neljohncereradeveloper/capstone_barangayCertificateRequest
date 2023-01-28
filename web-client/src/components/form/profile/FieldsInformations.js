import React from "react";
import { TextField } from "../TextField";
import { DropdownField } from "../DropdownField";

const FieldsInformations = () => {
  return (
    <>
      <p>Personal Informations</p>
      <TextField label="Full Name" name="fullName" type="text" />
      <TextField label="Age" name="age" type="number" />
      <DropdownField label="Gender" name="gender">
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </DropdownField>
      <TextField label="Birthday" name="birthDate" type="date" />
      <TextField label="Address" name="address" type="text" />
      <DropdownField label="Civil Status" name="civilStatus">
        <option value="">Civil Status</option>
        <option value="Married">Married</option>
        <option value="Widowed">Widowed</option>
        <option value="Separated">Separated</option>
        <option value="Divorce">Divorce</option>
        <option value="Single">Single</option>
      </DropdownField>
    </>
  );
};

export default FieldsInformations;
