import React from "react";
import { UserTable } from "../components/tables";
import { Topbar } from "../layout";
import "../assets/css/userpage.css";

function UserPage() {
  return (
    <>
      <Topbar page="Users Records" />
      <UserTable />
    </>
  );
}

export default UserPage;
