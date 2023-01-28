import React from "react";
import BarangayMember from "./BarangayMember";
import { connect } from "react-redux";

function BarangayCouncil(props) {
  const { settings } = props;
  return (
    <>
      <div className="barangay__council">
        <p className="barangay__council-header">BARANGAY COUNCIL</p>
        <div className="council">
          <BarangayMember
            name={settings.punongbarangay}
            position="Punong Barangay"
            status="punongbarangay"
          />
          <BarangayMember
            name={settings.skchairperson}
            position="SK Chairperson"
            status="skchairperson"
          />
          <BarangayMember
            name={settings.treasurer}
            position="Barangay Treasurer"
            status="treasurer"
          />
          <BarangayMember
            name={settings.secretary}
            position="Barangay Secretary"
            status="secretary"
          />
          <BarangayMember
            name={settings.kgwd_1}
            position="Barangay Kagawad"
            status="kgwd_1"
          />
          <BarangayMember
            name={settings.kgwd_2}
            position="Barangay Kagawad"
            status="kgwd_2"
          />
          <BarangayMember
            name={settings.kgwd_3}
            position="Barangay Kagawad"
            status="kgwd_3"
          />
          <BarangayMember
            name={settings.kgwd_4}
            position="Barangay Kagawad"
            status="kgwd_4"
          />
          <BarangayMember
            name={settings.kgwd_5}
            position="Barangay Kagawad"
            status="kgwd_5"
          />
          <BarangayMember
            name={settings.kgwd_6}
            position="Barangay Kagawad"
            status="kgwd_6"
          />
          <BarangayMember
            name={settings.kgwd_7}
            position="Barangay Kagawad"
            status="kgwd_7"
          />
        </div>
      </div>
    </>
  );
}
// redux setup
const mapStateToProps = (state) => {
  return {
    settings: state.user.settings,
  };
};
// export default App;
export default connect(mapStateToProps, null)(BarangayCouncil);
