import React from "react";

export const ProfileData = ({ label, value }) => {
  return (
    <>
      <div className="label__container">
        <label className="label__left ">{label} </label>
        <span className="label__right">: {value}</span>
      </div>
    </>
  );
};
