import React from "react";
import { useMutation } from "react-query";
import { updateBarangayName } from "../../api/Settings";

function BarangayInfo({ name, info }) {
  const mutation = useMutation(updateBarangayName, {
    onSuccess: () => {
      alert("update successfulll");
    },
  });
  const handleCLick = async () => {
    const barangayname = prompt("Type Barangay Name here ...");
    if (barangayname) {
      try {
        await mutation.mutateAsync({
          barangayname,
        });
      } catch (e) {}
    } else return null;
  };
  return (
    <>
      <div className="barangay__info">
        <p>{info}</p>
        <input disabled type="text" value={name} />
        <button className="btn-edit" onClick={handleCLick}>
          Edit
        </button>
      </div>
    </>
  );
}

export default BarangayInfo;
