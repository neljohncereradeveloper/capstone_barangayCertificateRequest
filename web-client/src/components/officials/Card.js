import React from "react";
import card from "../../assets/css/officials/card.module.css";

function Card({ image, role, name }) {
  return (
    <div className={card.container}>
      <img className={card.image} src={image} alt="images" />
      <div className={card.information}>
        <p className={card.subtitle}> {name}</p>
        <p className={card.title}>{role}</p>
      </div>
    </div>
  );
}

export default Card;
