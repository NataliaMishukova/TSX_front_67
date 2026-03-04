import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

function LoginForm() {
  // const CLICK_ME_BUTTON = document.querySelector("#clickme_button");

  const login = () => {
    console.log("login");
  };

  // CLICK_ME_BUTTON.addEventListener("click", login);

  // C передачей аргументов
  // const login = (message) => {
  //   console.log("Button login works!!!");
  //   alert(message);
  // };

  // Без передачи аргументов
  // const login = (event) => {
  //   event.preventDefault();
  //   console.log("Button login works!!!");
  // };

  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          // value={email}
          // onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          // value={password}
          // onChange={changePassword}
        />
        {/* <input
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
