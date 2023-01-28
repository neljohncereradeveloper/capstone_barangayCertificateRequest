import Title, { SubTitle } from "../styledComponents/Title";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import Ellipse from "../assets/images/Ellipse.svg";
import Button from "../styledComponents/Button";
import moment from "moment";
import { TextField } from "./common/TextField";
import "../assets/css/account/account.css";

const AccountTitle = styled(Title)`
  text-align: center;
`;
// section container
const SectioStyled = styled.section`
  border: var(--border);
  margin-bottom: 75px;
  padding-bottom: 85px;
  padding-right: 20px;
  padding-left: 20px;
  background-image: var(--section-background);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// inside section container
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--section-inside-background);
  border: var(--border);
  width: 100%;
  padding: 30px;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;
const AccountSubtitle = styled(SubTitle)`
  margin-top: 30px;
`;
// Img
const Img = styled.img`
  width: 5px;
  height: 5px;
  margin-right: 10px;
`;
// Bold Details
const BoldSubtitle = styled.p`
  color: var(--text-color);
  font-family: var(--font-family-bold);
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: ${(props) => props.marginTop && "20px"};
`;
// Text
const Text = styled.p`
  color: var(--text-color);
  font-family: var(--font-family-regular);
  font-size: 14px;
  line-height: 1.5;
  padding-left: ${(props) => props.paddingLeft && "15px"};
`;

const EditButton = styled(Button)`
  margin-top: 30px;
`;

function Account({ data, hhData }) {
  let history = useHistory();
  const { state } = useLocation();
  console.log("state :", state);
  const household = hhData.data[0];

  const handleClick = () => {
    history.push({
      pathname: "/account-edit",
      state: {
        data: data,
      },
    });
  };
  return (
    <>
      {state?.registerSuccessfull ? <div>Updated Successfull</div> : null}
      <AccountTitle>Profile</AccountTitle>
      <SectioStyled>
        <AccountSubtitle>HouseHold </AccountSubtitle>

        <SectionContainer className="body">
          <BoldSubtitle>HouseHold ID</BoldSubtitle>
          <Text>
            <Img src={Ellipse} alt="Logo" /> {data.household_ID}
            <br />
          </Text>
          <BoldSubtitle>HouseHold Head</BoldSubtitle>
          {household.map((hh) => {
            if (hh.householdrole === "Head")
              return (
                <div key={hh.userID}>
                  <Text>
                    <Img src={Ellipse} alt="Logo" />
                    {hh.fullname}
                    <br />
                  </Text>
                </div>
              );
            else return null;
          })}

          <BoldSubtitle marginTop>HouseHold Members</BoldSubtitle>
          {household.map((hh) => {
            if (hh.householdrole === "Member")
              return (
                <div key={hh.userID}>
                  <Text>
                    <Img src={Ellipse} alt="Logo" />
                    {hh.fullname}
                    <br />
                  </Text>
                </div>
              );
            else return null;
          })}
        </SectionContainer>
      </SectioStyled>

      <SectioStyled>
        <AccountSubtitle>Personal Informations</AccountSubtitle>
        <SectionContainer className="body">
          <TextField label_name="Barangay ID" text_value={data.barangayID_no} />
          <TextField label_name="Full Name" text_value={data.fullName} />
          <TextField label_name="Age" text_value={data.age} />
          <TextField label_name="Gender" text_value={data.gender} />
          <TextField
            label_name="Birthdate"
            text_value={moment(data.birthDate).format("MMM D YYYY")}
          />
          <TextField label_name="Address" text_value={data.address} />
          <TextField label_name="Civil Status" text_value={data.civilStatus} />
        </SectionContainer>
        <EditButton onClick={handleClick}>Edit Profile</EditButton>
      </SectioStyled>
    </>
  );
}

export default Account;
