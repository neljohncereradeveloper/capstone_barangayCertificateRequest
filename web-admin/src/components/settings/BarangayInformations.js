import React from "react";
import BarangayInfo from "./BarangayInfo";
import { connect } from "react-redux";
import "../../assets/css/sidebar.css";

function BarangayInformations(props) {
  const { settings } = props;
  return (
    <div className="barangay__informations">
      <p className="barangay__informations-header">Barangay Informations</p>
      <BarangayInfo name={settings.barangayname} info="Barangay Name" />
    </div>
  );
}

// redux setup
const mapStateToProps = (state) => {
  return {
    settings: state.user.settings,
  };
};
// export default App;
export default connect(mapStateToProps, null)(BarangayInformations);
