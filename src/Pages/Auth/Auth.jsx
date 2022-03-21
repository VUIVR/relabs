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
    passwordError: false,
  });

  function validateEmail(mail) {
    setValidate((prev) => ({ ...prev, email: mail }));
    const patternEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    patternEmail.test(mail)
      ? setValidate((prev) => ({
          ...prev,
          emailValid: true,
        }))
      : setValidate((prev) => ({
          ...prev,
          emailValid: false,
        }));
  }

  function validatePass(password) {
    setValidate((prev) => ({ ...prev, pass: password }));
    const patternPass = /^[0-9a-zA-Z!@#$%^&*]{8,20}$/i;
    patternPass.test(password)
      ? setValidate((prev) => ({
          ...prev,
          passwordValid: true,
        }))
      : setValidate((prev) => ({
          ...prev,
          passwordValid: false,
        }));
  }

  function checkValidate() {
    validate.emailValid
      ? setValidate((prev) => ({ ...prev, emailError: false }))
      : setValidate((prev) => ({ ...prev, emailError: true }));

      validate.passwordValid
      ? setValidate((prev) => ({ ...prev, passwordError: false }))
      : setValidate((prev) => ({ ...prev, passwordError: true }));

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
        <form>
          <label htmlFor="email">
            Электронная почта
            <input
              id="email"
              name="email"
              type="text"
              value={validate.email}
              onChange={(e) => validateEmail(e.target.value)}
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
              onChange={(e) => validatePass(e.target.value)}
            />
          </label>
          <div className={validate.passwordError ? st.error : st.valid}>
            1 заглавная и 8 символов
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
