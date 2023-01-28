import React from "react";
import { TextField } from "../TextField";

const FieldSUserInformation = () => {
  return (
    <>
      <p>1. Personal Informations</p>
      <TextField label="ID Number" name="idnumber" type="text" />
      <TextField label="Full name" name="fullname" type="text" />
      <TextField label="contact" name="contact" type="text" />
      <TextField label="address" name="address" type="text" />
    
    </>
  );
};

export default FieldSUserInformation;
