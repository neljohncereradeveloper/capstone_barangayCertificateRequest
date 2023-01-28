import React from "react";
import { TextField } from "../TextField";
import { DropdownField } from "../DropdownField";

const FieldSUserInformation = () => {
  return (
    <>
      <p>2. Personal Informations</p>
      <TextField label="Barangay ID No." name="barangayID_no" type="text" />
      <TextField label="Full name" name="fullName" type="text" />
      <DropdownField label="Gender" name="gender">
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </DropdownField>
      <TextField label="Age" name="age" type="number" />
      <TextField label="Birthday" name="birthDate" type="date" />
      <TextField label="Birth place" name="birthPlace" type="text" />
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

export default FieldSUserInformation;
