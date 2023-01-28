import React from "react";
import { useField, ErrorMessage } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shawdow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className="error">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};
