import React from "react";
import card from "../../assets/css/home/card.module.css";

function Card({ color, title,total }) {
  return (
    <section className={card.container} style={{ backgroundColor: color }}>
      <p className={card.title} >{title}</p>
      <p className={card.title} >{total}</p>
    </section>
  );
}

export default Card;
