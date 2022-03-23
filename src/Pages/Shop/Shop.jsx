import React from "react";
import MyCard from "../../Components/MyCard/Card";
import { defaultItems } from "./defaultItems";
import st from "./Shop.module.css";

function Shop() {
  
 const cardList = defaultItems.map((item1) => {
    return <MyCard item={item1} />;
  }); 

  return (
    <div className={st.shop}>
      <div className={st.container}>
        <h2>Товары</h2>
        <div className={st.itemList}>{cardList}</div>
      </div>
    </div>
  );
}

export default Shop;
