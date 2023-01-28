import styled from "styled-components";

export const Details = styled.p`
  font-family: var(--font-family-regular);
  font-size: 14px;
  color: var(--text-color);
  line-height: 1.5rem;
  margin-right: 20px;
  margin-left: 20px;
  margin: ${(props) => props.banner && "0px"};
  margin-bottom: ${(props) => props.banner && "10px"};
`;
