import React from "react";
import { sidebarData } from "./sidebarData";
import { useHistory } from "react-router-dom";
import { loggedOutAction } from "../redux";
import { connect } from "react-redux";
import "../assets/css/sidebar.css";

const Sidebar = (props) => {
  const { settings, barangayimages } = props;
  let history = useHistory();

  // finding barangay url image in the array of barangayimages
  const barangayimage = barangayimages?.find((img) => {
    return img.rolee === "Barangay Image";
  });

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <div className="sidebar__logo">
          <img src={barangayimage?.url} alt="logo" />
          <div className="sidebar__logo-container">
            <p>Barangay</p>
            <p>{settings.barangayname}</p>
          </div>
        </div>
        {sidebarData.map((data, key) => {
          return (
            <li
              key={key}
              className="sidebar__row"
              onClick={() => {
                history.push(data.link);
              }}
            >
              <div className="sidebar__icon">{data.icon}</div>
              <div className="sidebar__title">{data.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedInState: state.user.isLoggedInState,
    settings: state.user.settings,
    barangayimages: state.user.barangayimages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggedOutAction: () => dispatch(loggedOutAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
