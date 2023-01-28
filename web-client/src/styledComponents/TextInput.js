import React from "react";
import propTypes from "prop-types";
function TextInput({ name, type, placeholder, onChange, value, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
TextInput.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.oneOf(["text", "password"]),
  placeholder: propTypes.string.isRequired,
  value: propTypes.any,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

export default TextInput;
