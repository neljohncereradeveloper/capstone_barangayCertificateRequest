import React from "react";
import { Topbar } from "../layout";
import RequestLogs from "../components/tables/logs/RequestLogs";
import "../assets/css/logspage.css";

function LogsPage() {
  return (
    <>
      <Topbar page="Logs" />
      <RequestLogs />
    </>
  );
}

export default LogsPage;
