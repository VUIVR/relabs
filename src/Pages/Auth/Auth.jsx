import React, { useState } from "react";
import st from "./Auth.module.css";

function Auth() {
  const [validate, setValidate] = useState({
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false,
  });

  function handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  function validateEmail(email) {
    var patternEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return patternEmail.test(String(email).toLowerCase());
  }

  function validatePass(pass) {
    var patternPass = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return patternPass.test(String(pass).toLowerCase());
  }

  return (
    <main className={st.authPage}>
      <div className={st.authForm}>
        <h3>Авторизация</h3>
        <form>
          <label htmlFor="email">
            Электронная почта
            <input
              id="email"
              name="email"
              type="text"
              value={validate.email}
              onChange={(e) => handleUserInput(e)}
            />
          </label>
          <div className={st.errorEmail}>Email введен не корректно</div>
          <label htmlFor="pass">
            Пароль
            <input
              id="pass"
              name="pass"
              type="password"
              value={validate.pass}
              onChange={(e) => handleUserInput(e)}
            />
          </label>
          <div className={st.errorPass}>
            Пароль введен некорректно. Минимум 1 Заглавная буква
          </div>
          <button type="submit" className={st.button}>
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

export default Auth;

/* /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i */
