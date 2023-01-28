import React from "react";
import { RequestPage } from "../../../pages";
import { useQuery } from "react-query";
import { fetchDisapproveRequest } from "../../../api/Request";
import Table from "./Table";

const RequestDisapprove = () => {
  const { data, status } = useQuery("Disapprove", fetchDisapproveRequest);

  return (
    <>
      <RequestPage />
      <div className="request__page">
        <p className="table_header">Approve Requests</p>
        {status === "loading" && <div>Loading ...</div>}
        {status === "error" && <div>error fetching </div>}
        {status === "success" && (
          <Table data={data} status={status} totalResults={data.length} />
        )}
      </div>
    </>
  );
};

export default RequestDisapprove;
