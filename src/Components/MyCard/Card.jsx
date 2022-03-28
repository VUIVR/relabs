import React from "react";

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
    <div>
      <img src={item.img} alt={item.model} width="100%" />
      <div>-{item.discount}%</div>
      <div>
        {prettifly(item.totalPrice())} ₽ <span>{prettifly(item.price)} ₽</span>
      </div>
      <div>
        {item.brand} / {item.model} {item.memory}Gb / {item.display}"
      </div>
      <div>
        {raiting}
        <span>{item.raiting}</span>
      </div>
      <div>{item.creditProd}</div>
      <div>
        <button>В корзину</button> <span>♡</span>
      </div>
    </div>
  );
}

export default MyCard;
