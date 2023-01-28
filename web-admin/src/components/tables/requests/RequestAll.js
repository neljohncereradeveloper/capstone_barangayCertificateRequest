import React from "react";
import { fetchAllRequest } from "../../../api/Request";
import Table from "./Table";
import { RequestPage } from "../../../pages";
import { useQuery } from "react-query";

//Compoenents
const RequestAllTable = () => {
  const { data, status } = useQuery("requestAll", fetchAllRequest);
  return (
    <>
      <RequestPage />
      <div className="request__page">
        <p className="table_header">All Request</p>
        {status === "loading" && <div>Loading ....</div>}
        {status === "error" && <div>error fetching </div>}
        {status === "success" && (
          <Table data={data} status={status} totalResults={data.length} />
        )}
      </div>
    </>
  );
};

export default RequestAllTable;
