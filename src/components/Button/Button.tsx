import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  name = "Send",
  type = "button",
  onClick = () => {},
  isRed = false,
  disabled=false,
  color,
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} $isRed={isRed} type={type} onClick={onClick} color={color}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
