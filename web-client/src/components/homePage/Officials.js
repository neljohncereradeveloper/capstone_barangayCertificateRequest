import styled from "styled-components";
import { Link as Linkk } from "react-router-dom";
import { PunongBarangay } from "../../assets/images";
import { SubTitle } from "../../styledComponents/Title";
import { Details } from "../../styledComponents/Text";
import Button from "../../styledComponents/Button";
import * as Section from "../../styledComponents/Container";
import "../../assets/css/homePage/officials.css";

const Image = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  margin-top: 70px;
`;
const Text = styled(Details)`
  margin: 0;
`;
const Link = styled(Linkk)`
  text-decoration: none;
  color: white;
`;

function Officials() {
  return (
    <Section.Main centerItems className="main">
      <Image loading="lazy" src={PunongBarangay} alt="Logo" />
      <Text>Punong Barangay</Text>
      <SubTitle secondary>Carmelita M. Babao</SubTitle>
      <Button secondary>
        <Link to="/barangayOfficials">View Officials</Link>
      </Button>
    </Section.Main>
  );
}

export default Officials;
