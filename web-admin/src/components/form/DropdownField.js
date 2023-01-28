import React from "react";
import { useField, ErrorMessage } from "formik";

export const DropdownField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage component="div" name={field.name} className="error" />
      ) : null}
    </div>
  );
};
