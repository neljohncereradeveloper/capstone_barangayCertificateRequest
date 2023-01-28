import React from "react";
import Title from "../../styledComponents/Title";
import Button from "../../styledComponents/Button";
import TextArea from "../../styledComponents/TextArea";
import * as Section from "../../styledComponents/Container";
import "../../assets/css/homePage/feedback.css";

function FeedBack() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Feedback Submitted");
  };

  return (
    <Section.Main centerItems className="main">
      <Title>Feedback</Title>
      <TextArea cols="38" rows="8" />
      <Button secondary onClick={handleClick}>
        Submit
      </Button>
    </Section.Main>
  );
}

export default FeedBack;
