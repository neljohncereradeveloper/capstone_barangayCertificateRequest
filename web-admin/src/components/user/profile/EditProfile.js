import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { fetchUser, UpdateUser } from "../../../api/User";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import { Topbar } from "../../../layout";
import { Button } from "react-bootstrap";
import { Input } from "../../../styledComponents";
import { ArrowBackIcon } from "../../../assets/icons";
import { EditIcon, CheckCircleOutlineIcon } from "../../../assets/icons";
import "../../../assets/css/editprofile.css";

toast.configure();

function EditProfile() {
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
        setState({
          userID: data[0].userID,
          barangayID_no: data[0].barangayID_no,
          household_ID: data[0].household_ID,
          fullName: data[0].fullName,
          age: data[0].age,
          gender: data[0].gender,
          birthDate: data[0].userID,
          birthPlace: data[0].birthPlace,
          civilStatus: data[0].civilStatus,
          address: data[0].address,
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
  //destructuring state
  const {
    barangayID_no,
    household_ID,
    fullName,
    age,
    gender,
    birthPlace,
    civilStatus,
    address,
  } = state;
  // back button
  const handleBack = () => {
    history.goBack();
  };
  //save button using usemutation
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync({
        id: id,
        body: state,
      });
    } catch (e) {}
  };
  return (
    <div className="editProfile">
      <Topbar page="User" pageSubtitle="profile > edit" />
      {/* <h4>Edit profile {userID}</h4> */}
      <EditIcon />
      <div className="editProfile__row-1">
        <div className="editProfile__row-1__left input__left">
          Barangay ID No
          <Input
            type="text"
            value={barangayID_no}
            onChange={(val) => setState({ ...state, barangayID_no: val })}
          />
          HouseHold ID No
          <Input
            type="text"
            value={household_ID}
            onChange={(val) => setState({ ...state, household_ID: val })}
          />
          Full Name
          <Input
            type="text"
            value={fullName}
            onChange={(val) => setState({ ...state, fullName: val })}
          />
          Age
          <Input
            type="number"
            value={age}
            onChange={(val) => setState({ ...state, age: val })}
          />
          Gender
          <Input
            type="text"
            value={gender}
            onChange={(val) => setState({ ...state, gender: val })}
          />
        </div>
        <div className="editProfile__row-1__right">
          Birthdate
          <Input
            type="date"
            // value={birthday}
            onChange={(val) => setState({ ...state, birthday: val })}
          />
          Birth Place
          <Input
            type="text"
            value={birthPlace}
            onChange={(val) => setState({ ...state, birthPlace: val })}
          />
          Civil Status
          <Input
            type="text"
            value={civilStatus}
            onChange={(val) => setState({ ...state, civilStatus: val })}
          />
          Address
          <Input
            type="text"
            value={address}
            onChange={(val) => setState({ ...state, address: val })}
          />
        </div>
      </div>
      <div className="editProfile__row-2">
        <Button variant="secondary" onClick={handleBack}>
          <ArrowBackIcon />
          Back
        </Button>
        <Button variant="primary" onClick={handleSave}>
          <CheckCircleOutlineIcon />
          Save
        </Button>
      </div>
    </div>
  );
}

export default EditProfile;
