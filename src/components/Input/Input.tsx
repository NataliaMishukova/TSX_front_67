import { InputWrapper, InputComponent, InputLabel ,ErrorMessage} from "./styles";
import { type InputProps } from "./types";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined, //ставим значения, которые хотим, чтобы были по умолчанию
  value,onChange
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled} //слева-атрибут элемента, а справа в скобках-пропс(значение)
        $error={error} //по умолчани. атрибута error у инпута не существует, поэтому он горит красным, для этого ставим $
        value={value}
        onChange={onChange}
      />
         {/* Условный рендеринг
      - если слева от && стоит false, то элемент справа от && на странице не показывается(т.е скрывается)
      - если слева от && стоит true, то элемент справа от && на странице показывается */}
     {!!error && <ErrorMessage>{error}</ErrorMessage>}  
    </InputWrapper>
  );
}

export default Input;