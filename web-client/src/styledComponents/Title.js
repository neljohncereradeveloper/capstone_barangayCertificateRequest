import styled from "styled-components";

const Title = styled.h1`
  color: var(--text-color);
  font-family: "Lato Black", sans-serif;
  font-size: ${(props) => (props.banner ? "24px" : "20px")};
  margin-bottom: ${(props) => (props.banner ? "10px" : "30px")};
  margin-top: ${props => props.banner ? "70px" : "30px"};
`;

export const SubTitle = styled.h1`
  color: var(--text-color);
  font-family: "Lato Bold", sans-serif;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
`;

export default Title;
