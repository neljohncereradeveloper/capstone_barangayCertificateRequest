import Title, { SubTitle } from "../../styledComponents/Title";
import { Details } from "../../styledComponents/Text";
import * as Section from "../../styledComponents/Container";
import "../../assets/css/homePage/mission.css";

function MissionVision() {
  return (
    <Section.Main centerItems>
      <Title>Mission / Vision</Title>

      <Section.Body className="body">
        <SubTitle>Mission</SubTitle>
        <Details>
          To be able actively carry out the mandates and ensure transparency,
          honesty, efficiency, in the delivery of services in the barangay.
        </Details>
      </Section.Body>

      <Section.Body marginBottom_none className="body">
        <SubTitle>Vision</SubTitle>
        <Details>
          An independent and progressive barangay advocating principles and
          practices of good governance that help build and nurture honesty and
          responsibilty amongs its public officials and employees and take
          appropriate measures to promote transparency in transacting with the
          public.
        </Details>
      </Section.Body>
    </Section.Main>
  );
}

export default MissionVision;
