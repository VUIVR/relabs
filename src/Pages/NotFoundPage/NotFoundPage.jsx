import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import st from "./NotFoundPage.module.css";

function NotFoundPage() {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    
  }, [counter]);

  return (
    <div className={st.ep}>
      <div className='container'>
        <img src="./Images/404.png" height="300px" alt="404" />
        <div>
          Вы перейдете на Главную через {counter ? counter : navigate("/")}
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
