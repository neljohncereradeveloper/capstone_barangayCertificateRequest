import React from "react";
import { Text,RadioButtoN }  from "./styled";

function RadioButton({ value, checked, onChange, text }) {
  return (
    <>
      <Text>
        <RadioButtoN
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {text}
      </Text>
    </>
  );
}

export default RadioButton;
