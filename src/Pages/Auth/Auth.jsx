import React, { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import Loading from "../../UI/loading/Loading";
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

  function validatePass(event) {
    setValidate((prev) => ({ ...prev, pass: event.target.value }));
    const patternPass = /^[0-9a-zA-Z!@#$%^&*]{8,20}$/i;
    patternPass.test(event.target.value)
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
    <main>
      <div>
        <h2>Авторизация</h2>
        <form>
          <label htmlFor="email">
            Электронная почта
            <input
              id="email"
              name="email"
              type="text"
              value={validate.email}
              onChange={(e) => validateEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkValidate();
                }
              }}
            />
          </label>
          <div>Email введен не корректно</div>
          <label htmlFor="pass">
            Пароль
            <input
              id="pass"
              name="pass"
              type="password"
              value={validate.pass}
              onChange={(e) => {
                validatePass(e);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkValidate();
                }
              }}
            />
          </label>
          <div>1 заглавная, мин. 8 символов</div>
          <button type="button" onClick={() => checkValidate()}>
            Войти
          </button>
        </form>
        {loading}
      </div>
    </main>
  );
}

export default Auth;
