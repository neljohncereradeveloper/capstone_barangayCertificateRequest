import React from "react";
import { Topbar } from "../layout";
import { LineChart } from "../components/charts";
import { Card } from "../components/home";
import {
  fetchAllRequest,
  fetchApproveRequest,
  fetchDisapproveRequest,
} from "../api/Request";
import { useQuery } from "react-query";
import home from "../assets/css/home/home.module.css";

function HomePage() {
  const allRequest = useQuery("homeRequestAll", fetchAllRequest);
  const allApprove = useQuery("homeApprovetCount", fetchApproveRequest);
  const allDisapprove = useQuery(
    "homeDisapprovetCount",
    fetchDisapproveRequest
  );
  return (
    <>
      <Topbar page="Home" />
      <LineChart />
      <div className={home.card_container}>
        {allApprove.isSuccess ? (
          <Card color="green" title="Approve" total={allApprove.data.length} />
        ) : null}
        {allDisapprove.isSuccess ? (
          <Card
            color="red"
            title="Disapprove"
            total={allDisapprove.data.length}
          />
        ) : null}
        {allRequest.isSuccess ? (
          <Card
            color="gray"
            title="Total Request"
            total={allRequest.data.length}
          />
        ) : null}
      </div>
    </>
  );
}

export default HomePage;
