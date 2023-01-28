import React from "react";
import { useQuery } from "react-query";
import Table from "./Table";
import { fetchRequestLogs } from "../../../api/Logs";
import { TableLoader } from "../../../skeletons";
import "../../../assets/css/reactTable.css";

const RequestLogs = () => {
  const { data, status } = useQuery("logsrequests", fetchRequestLogs);

  return (
    <>
      {/* <LogsPage /> */}
      <div className="logs__table">
        <p className="table_header">All logs</p>
        <div className="loading">
          {status === "loading" &&
            Array(12)
              .fill("")
              .map((e, i) => (
                <TableLoader
                  key={i}
                  style={{ opacity: Number(2 / i).toFixed(1) }}
                />
              ))}
        </div>
        {status === "error" && (
          <div>
            <h4>Fetching Data not successful</h4>{" "}
          </div>
        )}
        {/* {status === "success" && <Table headers={headers} logsData={data} />} */}
        {status === "success" && (
          <Table data={data} status={status} totalResults={data.length} />
        )}
      </div>
    </>
  );
};

export default RequestLogs;
