import React from "react";
import { FormUserRegistration } from "../form/userRegistration";
import { useMutation } from "react-query";
import { insertUser } from "../../api/User";
import { toast } from "react-toastify";
import { Topbar } from "../../layout";
import { useHistory } from "react-router-dom";
import "../../assets/css/userregistration.css";

toast.configure();

const UserRegistration = () => {
  let history = useHistory();
  //USEMUTATION
  const mutation = useMutation(insertUser, {
    onSuccess: () => {
      toast.success("Register Sucessfull", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/users");
    },
  });
  //HANDLE SUBMIT

  const handleSubmit = async (values) => {
    try {
      await mutation.mutateAsync({
        state: values,
      });
    } catch (e) {}
  };
  return (
    <div className="user__registration">
      {/* user top */}
      <div className="topbar__registration">
        <Topbar page="User" pageSubtitle="registration" />
      </div>
      <div className="form__container">
        <FormUserRegistration handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default UserRegistration;
