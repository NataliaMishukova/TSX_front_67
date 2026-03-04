// 1 шаг: импортируем useState из библиотеки react
import { type ChangeEvent, useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

function LoginForm() {
  //На примере маленького импута
  // ШАГ2: Создаем стейт для нашего инпута, чтобы его контрлировать и иметь доступ к введенным пользователем данным
  // const [inputValue, setInputValue] = useState<string>("");

  // ШАГ 3:  создаем функцию, которая будет выполнять на событие onChange
  // const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };
  // console.log(inputValue)
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");//после добавления пропс создаем 2 стейта

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  console.log(email, password);

  const login = (event: any) => {//отправляем данные на сервер
    event.preventDefault();//функ-я кот-я предотвращает перезагрузку страницы
    console.log("Email", email);//строка для вывода данных в консоль
    console.log("Password", password);
  };

  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form/</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={changePassword}
        />
        {/* 1. Контроль элемента форм осущ-ся за счет 2 атрибутов: value  и onchange
        <input
          placeholder="Enter something"
          onChange={onChangeInputValue}
          value={inputValue}
        /> */}
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
