import React from "react";
import { Topbar } from "../layout";
import { BodyHeader } from "../components/reports";
import "../assets/css/reportpage.css"

function ReportsPage() {
  return (
    <>
      <Topbar page="Reports" />
      <BodyHeader />
    </>
  );
}

export default ReportsPage;
