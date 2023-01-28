import Card from "./records/Card";
import records from "../assets/css/records/records.module.css";
import { fetchUserRequestRecords } from "../api/Request";
import { connect } from "react-redux";
import { useQuery } from "react-query";
import moment from "moment";

function Records(props) {
  const { userID } = props.userAccount;
  const { data, status } = useQuery(
    ["requestRecords", { userID }],
    fetchUserRequestRecords
  );
  console.log("userID", userID);
  console.log("requestRecords", data);
  return (
    <>
      <h1 className={records.title}>Request Records</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" &&
        data?.map((record, key) => {
          return (
            <Card
              key={key}
              date={moment(record.r_date).format("MMM D YYYY")}
              time={record.r_time}
              certificate={record.certificateName}
              purpose={record.purpose}
              payment={record.payment}
              status={record.status}
              ifDisapprove={record.disapprove_reason}
            />
          );
        })}
    </>
  );
}

//redux set up
const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userAccount,
  };
};
export default connect(mapStateToProps, null)(Records);
