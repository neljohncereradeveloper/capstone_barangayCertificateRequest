import styled from "styled-components";
import { Link as Linkk } from "react-router-dom";
import * as Section from "../../styledComponents/Container";
import Title from "../../styledComponents/Title";
import { Details } from "../../styledComponents/Text";
import Button from "../../styledComponents/Button";
import "../../assets/css/homePage/banner.css";

const Link = styled(Linkk)`
  text-decoration: none;
`;

function Banner() {
  return (
    <Section.Main banner className="banner">
      <Title banner className="title">BARANGAY ONLINE CERTIFICATION REQUEST</Title>
      <Details banner>
        You can now Request Barangay Certificates <br />
        Through online service. <br />
        - Hasle Free <br />- Service Free
      </Details>
      <Link to="/request">
        <Button banners>Request Now</Button>
      </Link>
    </Section.Main>
  );
}

export default Banner;
