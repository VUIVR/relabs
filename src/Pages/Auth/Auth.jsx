import React from "react";
import st from "./Auth.module.css";


function Auth() {
  return (
    <main className={st.authPage}>
      <div className={st.authForm}>
        <h3>Авторизация</h3>
        <form>
          <label htmlFor="email">
            Электронная почта
            <input id="email" type="text" />
          </label>
        </form>
        <div>
          <label htmlFor="pass">
            Пароль
            <input id="pass" type="password" />
          </label>
          <button type="submit" className={st.button}>Войти</button>
        </div>
      </div>
    </main>
  );
}

export default Auth;
