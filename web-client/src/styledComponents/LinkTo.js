import React from "react";
import styled from "styled-components";
import { Link as Linkk } from "react-router-dom";

const Linkto = styled(Linkk)`
  cursor: pointer;
  font-family: var(--font-family-regular);
  font-size: 16px;
  text-decoration: none;
  color: darkblue;
  margin-bottom: 10px;
  &:hover {
    color: darkblue;
  }
`;

function Link({ text, path }) {
  return <Linkto to={path}>{text}</Linkto>;
}

export default Link;
