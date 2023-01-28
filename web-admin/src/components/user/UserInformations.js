import React from "react";
import { useQuery } from "react-query";
import { fetchUser } from "../../api/User";
import { Button } from "react-bootstrap";
import { Topbar } from "../../layout";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ArrowBackIcon } from "../../assets/icons";
import { Profile } from "./profile";
import "../../assets/css/userinformations.css";

function UserInformations() {
  let history = useHistory();
  let { id } = useParams();
  const { data, status } = useQuery(["user", { id }], fetchUser);
  return (
    <div className="userInformations">
      {/* Top Bar */}
      <Topbar page="User" pageSubtitle="profile" />
      {/* User informations Top */}
      <div className="userInformations__top">
        {status === "loading" && <div>Loading ...</div>}
        {status === "error" && <div>error fetchinggg </div>}
        {status === "success" && <Profile data={data} />}
      </div>
      {/* User informations Bottom */}
      <div className="userInformations__bottom">
        <Button
          variant="secondary"
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowBackIcon />
          Back
        </Button>
      </div>
    </div>
  );
}

export default UserInformations;
