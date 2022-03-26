import React from "react";
import MyCard from "../../Components/MyCard/Card";
import { defaultItems } from "./defaultItems";
import st from "./Shop.module.css";

function Shop() {
  
 const cardList = defaultItems.map((item) => {
    return <MyCard item={item} key={item.id}/>;
  }); 

  return (
    <div className={st.shop}>
      <div className={['container',st.containerCard].join(' ')}>
        <h2>Товары</h2>
        <div className={st.itemList}>{cardList}</div>
      </div>
    </div>
  );
}

export default Shop;
