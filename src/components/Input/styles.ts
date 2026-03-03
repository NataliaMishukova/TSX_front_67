import styled from "@emotion/styled";

interface ImputComponentProps {
  $error: string | undefined; //4 шаг.Расширяем типы импута, затем вставляем этот интерфейс в качетсве джинерика в треугольные скобки в переменную Инпут.затем переходим к 5 шагу и меняем стили и создаем для этого функции
}
const generateInputColor = (error: string | undefined, disabled?: boolean) => {
  // if(disabled === true) {
  if (disabled) {
    return "#acacacff";
  } else {
    if (error) {
      return "#ff6868ff";
    } else {
      return "#3f3f3f";
    }
  }
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<ImputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid  ${({ disabled, $error }) => generateInputColor($error, disabled)};//используем функцию обратного вызова, ставим $ так как пишем в обратных скобках
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
export const ErrorMessage = styled.p`
  height: 20px;
  color: #ff6868ff;
`;