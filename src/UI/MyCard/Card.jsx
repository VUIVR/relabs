import React from 'react'
import st from "./Card.module.css";


function MyCard({item}) {
  let raiting = ['☆','☆','☆','☆','☆']
  for (let i = 0; i < Math.round(item.raiting); i++) {
    raiting[i] = '★';    
  }

  return (
    <div className={st.card} id={item.id}>
      <img src={item.img} alt={item.model} width="100%" />
      <div className={st.discount}>-{item.discount}%</div>
      <div className={st.totalPrice}>{item.totalPrice()}₽ <span>{item.price}₽</span></div>
      <div className={st.title}>{item.brand}/{item.model} {item.memory}Gb/{item.display}"</div>
      <div >{raiting}<spam>87</spam></div>
      <div className={st.creditProd}>{item.creditProd}</div>
      
    </div>
  )
}

export default MyCard