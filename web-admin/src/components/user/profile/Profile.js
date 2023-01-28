import React from "react";
import moment from "moment";
import { ProfileData } from "./common/ProfileData";
import { useMutation } from "react-query";
import { deleteUser } from "../../../api/User";
import { Image, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import defaultImage from "../../../assets/images/defaultImage.jpg";
import "../../../assets/css/profile.css";

const Profile = ({ data }) => {
  const user = data[0];
  let { id } = useParams();
  let history = useHistory();
  console.log("user profile data", user);
  //USEMTUTATION
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      history.push("/users");
    },
  });
  // Edit Button
  const handleEdit = () => {
    history.push(`/user-edit/${id}`);
  };
  // Delete button using us mutation
  const handleDelete = async (e) => {
    e.preventDefault();
    let deleteUser = window.confirm("Do yu want to Delete this account?");
    if (deleteUser) {
      try {
        await mutation.mutateAsync({
          id: id,
          barangayID_no: user[0].barangayID_no,
        });
      } catch (e) {}
    }
  };

  return (
    <div className="profile">
      <div className="row__1">
        <div className="row__1-top">
          <Image src={defaultImage} thumbnail />
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
        <div className="row__1-data">
          <div className="row__1-data__left">
            <ProfileData
              label="Barangay ID No "
              value={user[0].barangayID_no}
            />
            <ProfileData
              label="HouseHold ID No "
              value={user[0].household_ID}
            />
            <ProfileData label="Full Name " value={user[0].fullName} />
            <ProfileData label="Age " value={user[0].age} />
            <ProfileData label="Gender " value={user[0].gender} />
          </div>
          <div className="row__1-data__right">
            <ProfileData
              label="Birthday "
              value={moment(user[0].birthDate).format("MMM D YYYY")}
            />
            <ProfileData label="Birth Place " value={user[0].birthPlace} />
            <ProfileData label="Civil Status " value={user[0].civilStatus} />
            <ProfileData label="Address " value={user[0].address} />
          </div>
        </div>
      </div>
      <hr />
      <div className="row__2">
        <ProfileData label="Username " value={user[0].username} />
        <ProfileData label="Password " value="*******" />
        <Button variant="warning">Reset Passwordd</Button>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
