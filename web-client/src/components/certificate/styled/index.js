import Title, { SubTitle } from "../../../styledComponents/Title";
import TextArea from "../../../styledComponents/TextArea";
import Button from "../../../styledComponents/Button";
import styled from "styled-components";

// Tiltle
export const TitlE = styled(Title)`
  text-align: center;
`;
// Small Sub title
export const SubTitlE = styled(SubTitle)`
  font-size: 14px;
  margin: 0;
  margin-bottom: 5px;
  margin-top: ${(props) => props.marginTop && "10px"};
`;
// inside section container
export const Body = styled.div`
  background-color: var(--section-inside-background);
  border: var(--border);
  width: 100%;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;
// button
export const ButtoN = styled(Button)`
  margin: 0;
  margin-top: 20px;
  margin-left: 40px;
`;
// radio button
export const RadioButtoN = styled.input`
  margin-right: 10px;
  margin-left: 10px;
`;
// Img
export const Img = styled.img`
  width: 5px;
  height: 5px;
  margin-right: 10px;
`;
// others text area
export const TextAreA = styled(TextArea)`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
`;
// Text
export const Text = styled.p`
  color: var(--text-color);
  font-family: var(--font-family-regular);
  font-size: 14px;
  line-height: 1.5;
`;
