import React, { useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { userRequestAction, loggedOutAction } from "../redux";
import { NotificationsIcon, ExitToAppIcon } from "../assets/icons";
import { pendingClickFalseAction } from "../redux";
import "../assets/css/topbar.css";

function Topbar({ page, pageSubtitle, ...props }) {
  const { requestCount } = props;
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Axios.get(
          "http://localhost:3001/api/request/allpending"
        );
        const { Pendings } = data.data.result[0];
        props.userRequestAction(Pendings);
        props.pendingClickFalseAction();
      } catch (error) {
        console.log("ERROR :", error);
      }
    };
    fetchData();
  }, [props]);

  //logout
  const logOut = (e) => {
    e.preventDefault();
    let exitApp = window.confirm("Do you want to logout?");
    if (exitApp) {
      props.loggedOutAction();
      alert("Logout Successful");
      history.push("/");
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar__left">
          <p className="topbar__header">{page}</p>
          <span>{" -> "} </span>
          <p>{pageSubtitle}</p>
        </div>
        <div className="topbar__right">
          <div className="topbar__right-notification">
            <NotificationsIcon />
            <div
              className={
                requestCount === 0
                  ? "topbar__right-notification__container-hide"
                  : "topbar__right-notification__container"
              }
            >
              <p>{requestCount}</p>
            </div>
          </div>
          <div className="topbar__right-account">
            <ExitToAppIcon onClick={logOut} />
          </div>
        </div>
      </div>
    </>
  );
}

//redux set up
const mapStateToProps = (state) => {
  return {
    requestCount: state.user.requestCount,
    isPendingButtonClick: state.user.isPendingButtonClick,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pendingClickFalseAction: () => dispatch(pendingClickFalseAction()),
    userRequestAction: (requestCount) =>
      dispatch(userRequestAction(requestCount)),
    loggedOutAction: () => dispatch(loggedOutAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
