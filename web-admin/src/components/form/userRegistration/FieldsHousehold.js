import React from "react";
import { TextField } from "../TextField";
import { DropdownField } from "../DropdownField";

const FieldsHousehold = () => {
  return (
    <>
      <p>1. Household</p>
      <TextField label="Household ID" name="houseHoldID_no" type="text" />
      <DropdownField label="Household role" name="houseHold_role">
        <option value="">Role</option>
        <option value="Member">Household Member</option>
        <option value="Head">Household Head</option>
      </DropdownField>
    </>
  );
};

export default FieldsHousehold;
