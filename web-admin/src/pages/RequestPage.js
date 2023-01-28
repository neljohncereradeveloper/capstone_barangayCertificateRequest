import React from "react";
import { BodyHeader } from "../components/requests";
import { Topbar } from "../layout";
import "../assets/css/requestpage.css";

function RequestPage(props) {
  return (
    <>
      <Topbar page="Requests records" />
      <BodyHeader />
    </>
  );
}

export default RequestPage;
