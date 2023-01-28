import styled, { css } from "styled-components";

// Main Section
export const Main = styled.section`
  background-image: var(--section-background);
  border: var(--border);
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.centerItems && "center"};
  margin-bottom: 70px;
  padding-bottom: 70px;
  padding-left: 20px;
  padding-right: 20px;

  ${(props) =>
    props.prime &&
    css`
  (
    color: blue;
  )
  `}
`;
// Body Section
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.centerItems && "center"};
  background-color: var(--section-inside-background);
  border: var(--border);
  border-radius: 10px;
  margin-bottom: ${(props) => (props.marginBottom_none ? "0px" : "50px")};
  padding-bottom: 50px;
`;
