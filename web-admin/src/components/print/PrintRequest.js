import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../../assets/css/print/request.css";
import { bkslog, davao, davaoseal } from "../../assets/images";
import { connect } from "react-redux";
import moment from 'moment'

function PrintRequest(props) {
  let history = useHistory();
  const { state } = useLocation();
  const { request } = state;
  const { settings } = props;
  console.log("settings data : ", settings);
    console.log("request data : ", request);
  return (
    <>
      <div className="print__header">
        <button
          className="btn btn-secondary"
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </button>
      </div>

      <div className="print__request">
        <div className="print__request-header">
          <div className="print__request-header__left">
            <img src={bkslog} alt="logo" />
          </div>
          <div className="print__request-header__center">
            <p>Republic of the Philippines</p>
            <p>CITY OF DAVAO</p>
            <p>
              Barangay <span>{settings.barangayname}</span>
            </p>
            <p>Toril District</p>
            <p>OFFICE OF THE SANGGUNIANG BARANGAY</p>
          </div>
          <div className="print__request-header__right">
            <img src={davaoseal} alt="logo" />
          </div>
        </div>
        {/* BODY */}
        <div className="print__request-body">
          {/* LEFT */}
          <div className="print__request-body__left">
            <p>BARANGAY COUNCIL</p>
            <div className="member punongbarangay">
              <p>{settings.punongbarangay}</p>
              <span>Punong Barangay</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_1}</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_2}</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_3}.</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_4}</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_5}</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_6}</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.kgwd_7}</p>
              <span>Barangay Kagawad</span>
            </div>
            <div className="member">
              <p>{settings.skchairperson}</p>
              <span>SK Chairperson</span>
            </div>
            <div className="member treasurer">
              <p>{settings.treasurer}</p>
              <span>Barangay Treasurer</span>
            </div>
            <div className="member secretary">
              <p>{settings.secretary}</p>
              <span>Barangay Secretary</span>
            </div>
            <img className="davao" src={davao} alt="logo" />
          </div>
          {/* RIGHT */}
          <div className="print__request-body__right">
            <p>CERTIFICATION</p>
            <div className="body">
              <p>To whom it may concern :</p>
              <p>
                THIS IS TO CERTIFY that,{" "}
                <b>
                  {request.fullName}, {request.age}{" "}
                </b>
                years old, Filipino, {request.gender}, {request.civilStatus}, a
                resident of {request.address}, Philippines.
              </p>
              <p>
                This further certifies that said above mentioned person is a
                bonified resident of this barangay.
              </p>
              <p>
                This certification is being issued upon request for{" "}
                <b>{request.certificateName}</b> and for whatever legal purpose
                this may server best.
              </p>
              <p>
                Done this <b>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a") }</b> at Barangay{" "}
                {settings.barangayname}, Toril, Davao City.
              </p>
            </div>
            <div className="footer">
              <p>{settings.punongbarangay}</p>
              <p>Punong Barangay</p>
              <p>Not valid without seal</p>
            </div>
          </div>
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
export default connect(mapStateToProps, null)(PrintRequest);
