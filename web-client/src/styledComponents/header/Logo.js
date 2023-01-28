import styled from "styled-components";
import { connect } from "react-redux";

const StyledHeaderLogo = styled.img`
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 25px;
  width: 25px;
`;
const StyledTitle = styled.p`
  font-family: "Lato Bold", sans-serif;
  font-size: 16px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const HeaderLogo = (props) => {
  const { barangayimages, settings } = props;

  return (
    <>
      {barangayimages.map((doc, key) => {
        if (doc.rolee === "Barangay Image") {
          return <StyledHeaderLogo key={key} src={doc.url} alt="Logo" />;
        } else return null;
      })}

      <StyledTitle>{settings.barangayname}</StyledTitle>
    </>
  );
};

// redux setup
const mapStateToProps = (state) => {
  return {
    barangayimages: state.user.barangayimages,
    settings: state.user.settings,
  };
};

// export default App;
export default connect(mapStateToProps, null)(HeaderLogo);
