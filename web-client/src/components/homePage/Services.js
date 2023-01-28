import styled from "styled-components";
import { Link as Linkk } from "react-router-dom";
import { Certificate, Clearance } from "../../assets/images";
import Title, { SubTitle } from "../../styledComponents/Title";
import { Img } from "../../styledComponents/Img";
import Button from "../../styledComponents/Button";
import * as Section from "../../styledComponents/Container";
import "../../assets/css/homePage/services.css";

const Link = styled(Linkk)`
  text-decoration: none;
  color: white;
`;

function Services() {
  return (
    <Section.Main centerItems>
      <Title>Services</Title>

      <Section.Body centerItems className="body">
        <Img src={Certificate} alt="Logo" />
        <SubTitle secondary> Barangay Certificate</SubTitle>
        <Button>
          <Link to="/guides">Learn More </Link>
        </Button>
      </Section.Body>

      <Section.Body centerItems marginBottom_none className="body">
        <Img src={Clearance} alt="Logo" />
        <SubTitle> Barangay Clearance</SubTitle>
        <Button>
          <Link to="/guides">Learn More </Link>
        </Button>
      </Section.Body>
    </Section.Main>
  );
}

export default Services;
