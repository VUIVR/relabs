import React from "react";
import st from "./Card.module.css";

function MyCard({ item }) {
  

//отображает цену добавляя пробелы
  function prettifly(num) {
    
    const n = num.toString();
    const separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }

  //звездный рейтинг
  const raiting = ["☆", "☆", "☆", "☆", "☆"];
  for (let i = 0; i < Math.round(item.raiting); i++) {
    raiting[i] = "★";
  }

  return (
    <div className={st.card}>
      <img src={item.img} alt={item.model} width="100%" />
      <div className={st.discount}>-{item.discount}%</div>
      <div className={st.totalPrice}>
        {prettifly(item.totalPrice())} ₽{" "}
        <span className={st.price}>{prettifly(item.price)} ₽</span>
      </div>
      <div className={st.title}>
        {item.brand} / {item.model} {item.memory}Gb / {item.display}"
      </div>
      <div className={st.rating}>
        {raiting}
        <span className={st.numOtziv}>{item.raiting}</span>
      </div>
      <div className={st.creditProd}>{item.creditProd}</div>
      <div className={st.buy}>
        <button className={st.button}>В корзину</button>{" "}
        <span className={st.heart}>♡</span>
      </div>
    </div>
  );
}

export default MyCard;
