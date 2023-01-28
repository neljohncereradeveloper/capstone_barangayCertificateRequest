import styled from "styled-components";
import * as Section from "../styledComponents/Container";
import { SubTitle } from "../styledComponents/Title";
import { TitlE, Body } from "./certificate/styled";
import List from "./certificate/List";
import Certificate from "../assets/images/barangay-certificate.svg";
import Clearance from "../assets/images/barangay-clearance.svg";
import "../assets/css/guide.css";

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;
const BoldSubtitle = styled.p`
  color: var(--text-color);
  font-family: var(--font-family-bold);
  font-size: 14px;
  margin-top: ${(props) => props.marginTop && "10px"};
  margin-bottom: 5px;
`;

function Guide() {
  return (
    <>
      <TitlE>Guidelines</TitlE>
      <Section.Main>
        <Image src={Certificate} alt="Logo" className="image" />
        <SubTitle> Barangay Certificate</SubTitle>
        <Body className="body">
          <BoldSubtitle>Includes</BoldSubtitle>
          <List text="Barangay Residency" />
          <List text="Low Income" />
          <List text="Indigency" />
          <List text="Senior Citizen" />
          <List text=" Solo Parent ( PWD )" />
          <List text="Business Certicate " />
          <BoldSubtitle marginTop>Clients</BoldSubtitle>
          <List text="Barangay Residents" />
          <List text=" Barangay Association" />
          <List text="Organization" />
          <List text="Entrepreneur" />
          <List text="Students" />
          <BoldSubtitle marginTop>Requirements</BoldSubtitle>
          <List text="Request slip" />
          <List text="Valid ID" />
          <BoldSubtitle marginTop>Fees</BoldSubtitle>
          <List text="P 10.00" />
        </Body>
      </Section.Main>
      <Section.Main>
        <Image src={Clearance} alt="Logo" className="image" />
        <SubTitle> Barangay Clearance</SubTitle>
        <Body className="body">
          <BoldSubtitle marginTop>Clients</BoldSubtitle>
          <List text="Barangay Residents" />
          <List text=" Corporations" />
          <List text="Traders" />
          <List text="Retailers" />
          <List text="Businessman" />
          <BoldSubtitle marginTop>Requirements</BoldSubtitle>
          <List text="Request slip" />
          <List text="Valid ID" />
          <List text="Community Tax" />
          <BoldSubtitle marginTop>Fees</BoldSubtitle>
          <List text="P 10.00" />
        </Body>
      </Section.Main>
    </>
  );
}

export default Guide;
