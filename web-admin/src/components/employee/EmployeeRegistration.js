import React from "react";
import { FormEmployeeRegistration } from "../form/employee";
import { useMutation } from "react-query";
import { InsertEmployee } from "../../api/Employee";
import { toast } from "react-toastify";
import { Topbar } from "../../layout";
import { useHistory } from "react-router-dom";
import "../../assets/css/userregistration.css";

toast.configure();

const EmployeeRegistration = () => {
  let history = useHistory();
  //USEMUTATION
  const mutation = useMutation(InsertEmployee, {
    onSuccess: () => {
      toast.success("Register Sucessfull", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/employees");
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
        <Topbar page="Employee" pageSubtitle="registration" />
      </div>
      <div className="form__container">
        <FormEmployeeRegistration handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default EmployeeRegistration;
