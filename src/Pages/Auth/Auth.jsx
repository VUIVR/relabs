import React, { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import Loading from "../../UI/loading/Loading";
import st from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [validate, setValidate] = useState({
    email: "",
    pass: "",
    emailValid: false,
    emailError: false,
    passwordValid: false,
    passwordError: false
  });

  function handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value.trim();
    setValidate((prev) => ({ ...prev, [name]: value }));
  }

  function validateEmail(email) {
    const patternEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    patternEmail.test(email)
      ? setValidate((prev) => ({ ...prev, emailValid: true, emailError: false }))
      : setValidate((prev) => ({ ...prev, emailValid: false,  emailError: true }));
  }

  function validatePass(pass) {
    const patternPass = /^[0-9a-zA-Z!@#$%^&*]{8,20}$/i;
    patternPass.test(pass)
      ? setValidate((prev) => ({ ...prev, passwordValid: true, passwordError:false }))
      : setValidate((prev) => ({ ...prev, passwordValid: false, passwordError:true }));
  }

  async function checkValidate() {
    validateEmail(validate.email);
    validatePass(validate.pass);

    if (validate.passwordValid && validate.emailValid) {
      setLoading(
        <Modal>
          <Loading />
          <div>Авторизация ....</div>
        </Modal>
      );
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  return (
    <main className={st.authPage}>
      <div className={st.authForm}>
        <h3>Авторизация</h3>
        <form disable>
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
          <div className={validate.emailError ? st.error : st.valid}>
            Email введен не корректно
          </div>
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
          <div className={validate.passwordError ? st.error : st.valid}>
            Пароль введен некорректно. Минимум 1 Заглавная буква
          </div>
          <button
            type="button"
            className={st.button}
            onClick={() => checkValidate()}
          >
            Войти
          </button>
        </form>
        {loading}
      </div>
    </main>
  );
}

export default Auth;
