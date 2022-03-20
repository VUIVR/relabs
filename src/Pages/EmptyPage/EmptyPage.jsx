import React, { useState, useEffect } from "react";
import st from "./EmptyPage.module.css";
import image from "./404.png";
import { useNavigate } from "react-router-dom";

function EmptyPage() {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();


  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);    
  }, [counter]);

  return (
    <div className={st.ep}>
      <div className={st.info}>
        <img src={image} height="300px" alt="404" />
        <div>Вы перейдете на Главную через {counter ? counter : navigate('/')}</div>
      </div>
    </div>
  );
}

export default EmptyPage;
