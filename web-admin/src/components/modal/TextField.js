import React from "react";
import app from "../../assets/css/app.module.css";

function TextField({ ref, label, name, handleChange, onClick }) {
  return (
    <div>
      <div className={app.input_container}>
        <label className={app.label} htmlFor={name}>
          {label}
        </label>
        <div className={app.input_container_1}>
          <input
            ref={ref}
            className={app.input}
            name={name}
            type="file"
            onChange={handleChange}
          />
          <button className={app.button} onClick={onClick}>
            upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextField;
