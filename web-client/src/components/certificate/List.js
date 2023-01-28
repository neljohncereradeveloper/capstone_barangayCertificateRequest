import React from "react";
import Ellipse from "../../assets/images/Ellipse.svg";
import { Img, Text } from "./styled";

function List({ text }) {
  return (
    <>
      <Text>
        <Img src={Ellipse} alt="Logo" /> {text} <br />
      </Text>
    </>
  );
}

export default List;
