import React from "react";
import { Topbar } from "../layout";
import officials from "../assets/css/officials/officials.module.css";
import { Card } from "../components/barangayofficials";
import { connect } from "react-redux";
import { Offline } from "react-detect-offline";
import app from "../assets/css/app.module.css";

function BarangayOfficials(props) {
  const { barangayimages, settings } = props;

  return (
    <>
      <Topbar page="Barangay Officials" />
      <div className={officials.container}>
        <p className={officials.title}>Barangay Officials</p>
        {barangayimages?.map((img) => {
          if (img.rolee === "Barangay Image")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Barangay Logo"
                name={settings.barangayname}
              />
            );
          if (img.rolee === "Punong Barangay")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Punong Barangay"
                name={settings.punongbarangay}
              />
            );
          if (img.rolee === "Barangay Treasurer")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Barangay Treasurer"
                name={settings.treasurer}
              />
            );
          if (img.rolee === "Barangay Secretary")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Barangay Secretary"
                name={settings.secretary}
              />
            );
          if (img.rolee === "SkChairman")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="SkChairman"
                name={settings.skchairperson}
              />
            );

          if (img.rolee === "Kagawad 1")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 1"
                name={settings.kgwd_1}
              />
            );
          if (img.rolee === "Kagawad 2")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 2"
                name={settings.kgwd_2}
              />
            );

          if (img.rolee === "Kagawad 3")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 3"
                name={settings.kgwd_3}
              />
            );
          if (img.rolee === "Kagawad 4")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 4"
                name={settings.kgwd_4}
              />
            );
          if (img.rolee === "Kagawad 5")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 5"
                name={settings.kgwd_5}
              />
            );
          if (img.rolee === "Kagawad 6")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 6"
                name={settings.kgwd_6}
              />
            );
          if (img.rolee === "Kagawad 7")
            return (
              <Card
                key={img.id}
                image={img.url}
                role="Kagawad 7"
                name={settings.kgwd_7}
              />
            );
          return null;
        })}
      </div>
    </>
  );
}

// redux setup
const mapStateToProps = (state) => {
  return {
    barangayimages: state.user.barangayimages,
    settings: state.user.settings,
  };
};

// export default App;
export default connect(mapStateToProps, null)(BarangayOfficials);
