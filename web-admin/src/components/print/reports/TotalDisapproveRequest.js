import React, { useState } from "react";
import { ReportsPage } from "../../../pages";
import { DatesForm } from "../../form/reports";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { fetchDisapproveReports } from "../../../api/Reports";
import { fetchEmployee } from "../../../api/Employee";
import PrintPageApprove from "./PrintPageApprove";

function TotalDisapproveRequest(props) {
  const { userAccount } = props;
  const id = userAccount.employeeID;
  const employee = useQuery(["employee", { id }], fetchEmployee);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const { data, status, refetch } = useQuery(
    ["printDisapprove", { fromDate, toDate }],
    fetchDisapproveReports,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const handleSubmit = (values) => {
    setFromDate(values.fromDate);
    setToDate(values.toDate);
    refetch();
  };
  return (
    <>
      <div className="report_header">
        <ReportsPage />
        <p className="table_header">Disapprove request reports</p>
        <DatesForm handleSubmit={handleSubmit} />
      </div>

      {status === "loading" && <div>Loading ...</div>}
      {status === "error" && <div>error fetchinggg </div>}
      {status === "success" && employee.isSuccess && (
        <div className="print__totalApprove">
          <PrintPageApprove
            data={data}
            fromDate={fromDate}
            toDate={toDate}
            status="Disapprove"
            generatedBy={employee.data[0].fullname}
          />
        </div>
      )}
    </>
  );
}
// redux setup
const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userAccount,
  };
};
// export default App;
export default connect(mapStateToProps, null)(TotalDisapproveRequest);
