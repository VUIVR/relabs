import React from "react";
import st from "./Card.module.css";

function MyCard({ item }) {
  function prettify(num) {
    const n = num.toString();
    const separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }

  const raiting = ["☆", "☆", "☆", "☆", "☆"];
  for (let i = 0; i < Math.round(item.raiting); i++) {
    raiting[i] = "★";
  }

  return (
    <div className={st.card} id={item.id}>
      <img src={item.img} alt={item.model} width="100%" />
      <div className={st.discount}>-{item.discount}%</div>
      <div className={st.totalPrice}>
        {prettify(item.totalPrice())} ₽ <span className={st.price}>{prettify(item.price)} ₽</span>
      </div>
      <div className={st.title}>
        {item.brand} / {item.model} {item.memory}Gb / {item.display}"
      </div>
      <div className={st.rating}>
        {raiting} 
        <spam className={st.numOtziv}>{item.raiting}</spam>
      </div>
      <div className={st.creditProd}>{item.creditProd}</div>
      <div className={st.buy}><button className={st.button}>В корзину</button>  <span className={st.heart}>♡</span></div> 
    </div>
  );
}

export default MyCard;
