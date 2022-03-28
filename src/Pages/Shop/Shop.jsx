import React from "react";
import MyCard from "../../Components/MyCard/Card";
import { defaultItems } from "./defaultItems";

function Shop() {
  const cardList = defaultItems.map((item) => {
    return <MyCard item={item} key={item.id} />;
  });

  return (
    <div>
      <div>
        <h2>Товары</h2>
        <div>{cardList}</div>
      </div>
    </div>
  );
}

export default Shop;
