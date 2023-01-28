import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { SubTitle } from "../../styledComponents/Title";
import * as Section from "../../styledComponents/Container";
import { TitlE, SubTitlE, Body, ButtoN, TextAreA, Text } from "./styled";
import RadioButton from "./RadioButton";
import List from "./List";
import "../../assets/css/request/request.css";

toast.configure();

// FUNCTION
function Certificate(props) {
  let history = useHistory();
  const { userID } = props.userAccount;
  const [value, setValue] = useState("");
  const [others, setOthers] = useState("");
  const [purpose, setPurpose] = useState("");
  const [otherPurpose, setOtherPurpose] = useState("");
  const [othersDisabled, setOthersDisabled] = useState(true);
  const [otherPurposeDisabled, setOtherPurposeDisabled] = useState(true);
  const [payment, setPayment] = useState("");
  // onchange
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // useEffect
  useEffect(() => {
    if (value === "others") {
      setOthersDisabled(false);
    } else {
      setOthersDisabled(true);
    }
    if (purpose === "otherPurpose") {
      setOtherPurposeDisabled(false);
    } else {
      setOtherPurposeDisabled(true);
    }
  }, [value, purpose]);
  // Request Certificate
  const certificateRequest = (e) => {
    e.preventDefault();
    const finalPurpose = purpose === "otherPurpose" ? otherPurpose : purpose;
    Axios.post("http://localhost:3001/api/request/insert", {
      userID: userID,
      certificateName: value,
      payment: payment,
      purpose: finalPurpose,
      status: "pending",
    })
      .then((result) => {
        toast.success("Request Sucessfull", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Certificate request result : ", result);
        history.push("/home");
      })
      .catch((err) => {
        toast.error("Request not successful", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Admin front end error", err);
      });
  };
  const clearanceRequest = (e) => {
    e.preventDefault();
    alert("Request Submitted");
  };
  return (
    <>
      <TitlE>CERTIFICATION REQUEST</TitlE>
      <Section.Main>
        <SubTitle>Barangay Certificate</SubTitle>
        <Body className="body">
          <SubTitlE>Select Certificate :</SubTitlE>
          <RadioButton
            value="Barangay Residency"
            checked={value === "Barangay Residency"}
            onChange={onChange}
            text="Barangay Residency"
          />
          <RadioButton
            value="Low Income"
            checked={value === "Low Income"}
            onChange={onChange}
            text="Low income"
          />
          <RadioButton
            value="Indigency"
            checked={value === "Indigency"}
            onChange={onChange}
            text="Indigency"
          />
          <RadioButton
            value="Senior Citizen"
            checked={value === "Senior Citizen"}
            onChange={onChange}
            text="Senior Citizen"
          />
          <RadioButton
            value="Solo Parent(PWD)"
            checked={value === "Solo Parent(PWD)"}
            onChange={onChange}
            text="Solo Parent ( PWD )"
          />
          <RadioButton
            value="Business Certificare"
            checked={value === "Business Certificare"}
            onChange={onChange}
            text="Business Certificate"
          />
          {/* <RadioButton
            value="others"
            checked={value === "others"}
            onChange={onChange}
            text="Other pLease specify : "
          />
          <TextAreA
            value={others}
            disabled={othersDisabled}
            cols="25"
            rows="2"
            onChange={(e) => {
              setOthers(e.target.value);
            }}
          /> */}
          <Text>
            <SubTitlE>Purpose :</SubTitlE>
            <RadioButton
              value="For Whatever purpose it may served"
              checked={purpose === "For Whatever purpose it may served"}
              onChange={(e) => setPurpose(e.target.value)}
              text="For Whatever purpose it may served"
            />
            <RadioButton
              value="otherPurpose"
              checked={purpose === "otherPurpose"}
              onChange={(e) => setPurpose(e.target.value)}
              text="Other purpose : "
            />
            <TextAreA
              value={otherPurpose}
              disabled={otherPurposeDisabled}
              name=""
              cols="25"
              rows="4"
              onChange={(e) => {
                setOtherPurpose(e.target.value);
              }}
            />
          </Text>

          <Text>
            <SubTitlE>Payment Method :</SubTitlE>
            <RadioButton
              value="Cash on Delivery"
              checked={payment === "Cash on Delivery"}
              onChange={(e) => setPayment(e.target.value)}
              text="Cash on Delivery"
            />
            <RadioButton
              value="Gcash"
              checked={payment === "Gcash"}
              onChange={(e) => setPayment(e.target.value)}
              text="Gcash"
            />
            <RadioButton
              value="On Site Payment"
              checked={payment === "On Site Payment"}
              onChange={(e) => setPayment(e.target.value)}
              text="On Site Payment "
            />
          </Text>
          <ButtoN onClick={certificateRequest}>Request</ButtoN>
        </Body>
      </Section.Main>
      <Section.Main>
        <SubTitle>Barangay Clearance</SubTitle>
        <Body className="body">
          <SubTitlE>Requirements</SubTitlE>
          <List text="Request slip" />
          <List text="Valid ID" />
          <List text="Community Tax" />
          <SubTitlE marginTop>Fees</SubTitlE>
          <List text="P 10.00" />
          <ButtoN onClick={clearanceRequest}>Request</ButtoN>
        </Body>
      </Section.Main>
    </>
  );
}

//redux set up
const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userAccount,
  };
};
export default connect(mapStateToProps, null)(Certificate);
