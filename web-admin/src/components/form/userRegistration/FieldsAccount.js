import React from "react";
import { TextField } from "../TextField";

const FieldsAccount = () => {
  return (
    <>
      <p>4. Account</p>
      <TextField label="Username" name="userName" type="text" />
      <TextField label="Password" name="password" type="password" />
    </>
  );
};

export default FieldsAccount;
