import React from "react";
import { TextField } from "../TextField";

const FieldsAccount = () => {
  return (
    <>
      <p>2. Account</p>
      <TextField label="Username" name="username" type="text" />
      <TextField label="Password" name="p_assword" type="password" />
    </>
  );
};

export default FieldsAccount;
