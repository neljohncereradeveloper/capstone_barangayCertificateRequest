import React, { useState } from "react";
import { fetchUser, UpdateUser } from "../../api/User";
import { useParams, useHistory } from "react-router-dom";
import UserEdit from "../form/userEdit";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { Topbar } from "../../layout";
import moment from "moment";
import "../../assets/css/userregistration.css";

toast.configure();

const EditProf = () => {
  let { id } = useParams();
  let history = useHistory();
  const [state, setState] = useState({});
  //USEMUTATION
  const mutation = useMutation(UpdateUser, {
    onSuccess: () => {
      toast.success("Updated Sucessfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push(`/user/${id}`);
    },
  });
  //USEQUERY
  const { isLoading, isFetching, isError } = useQuery(
    ["user", { id }],
    fetchUser,
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const user = data[0];
        var curr = user[0].birthDate;
        setState({
          userID: user[0].userID,
          barangayID_no: user[0].barangayID_no,
          household_ID: user[0].household_ID,
          householdrole: user[0].householdrole,
          fullName: user[0].fullName,
          age: user[0].age,
          gender: user[0].gender,
          birthDate: moment(curr).format("YYYY-MM-DD"),
          birthPlace: user[0].birthPlace,
          civilStatus: user[0].civilStatus,
          address: user[0].address,
          username: user[0].username,
        });
      },
    }
  );
  if (isLoading) {
    return <p> loading ...</p>;
  }
  if (isFetching) {
    return <p> fetching ...</p>;
  }
  if (isError) {
    return <p> error</p>;
  }
  //save button using usemutation
  const handleSubmit = async (values) => {
    try {
      await mutation.mutateAsync({
        id: id,
        body: values,
      });
    } catch (e) {}
  };
  return (
    <div className="user__registration">
      {/* user top */}
      <div className="topbar__registration">
        <Topbar page="User" pageSubtitle="Edit Informations" />
      </div>
      <div className="form__container">
        <UserEdit handleSubmit={handleSubmit} data={state} />
      </div>
    </div>
  );
};

export default EditProf;
