import React from "react";
import { useMutation } from "react-query";
import { updateSettings } from "../../api/Settings";

function BarangayMember({ name, position, status }) {
  const mutation = useMutation(updateSettings, {
    onSuccess: () => {
      alert("update successfulll");
    },
  });
  // handle click
  const handleClick = async () => {
    if (status === "punongbarangay") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "punongbarangay",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "skchairperson") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "skchairperson",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "treasurer") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "treasurer",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "secretary") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "secretary",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_1") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_1",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_2") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_2",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_3") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_3",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_4") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_4",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_5") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_5",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_6") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_6",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else if (status === "kgwd_7") {
      const bryid = prompt("Type Barangay Id No here ...");
      if (bryid) {
        try {
          await mutation.mutateAsync({
            status: "kgwd_7",
            barangayID_no: bryid,
          });
        } catch (e) {}
      } else return null;
    } else return null;
  };
  return (
    <>
      <div className="barangay__member">
        <p>{position}</p>
        <input disabled type="text" value={name} />
        <button className="btn-edit" onClick={handleClick}>
          Edit
        </button>
      </div>
    </>
  );
}

export default BarangayMember;
