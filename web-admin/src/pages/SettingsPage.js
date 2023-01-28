import React from "react";
import { Topbar } from "../layout";
import { connect } from "react-redux";
import { setModalAction } from "../redux";
import { BarangayCouncil, BarangayInformations } from "../components/settings";
import "../assets/css/settingspage.css";

function SettingsPage(props) {
  //handle click
  const handleClick = () => {
    props.setModalAction(true);
  };

  return (
    <>
      <Topbar page="Settings" />
      <p className="table_header">Modify Settings </p>
      <div className="settings">
        <button
          className="btn btn-primary"
          style={{ width: "200px", marginLeft: "30px", marginTop: "20px" }}
          onClick={handleClick}
        >
          Upload Images
        </button>
        <BarangayInformations />
        <BarangayCouncil />
      </div>
    </>
  );
}

// dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    setModalAction: (modal) => dispatch(setModalAction(modal)),
  };
};
// export default App;
export default connect(null, mapDispatchToProps)(SettingsPage);
