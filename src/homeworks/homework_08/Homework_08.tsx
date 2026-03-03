import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { PageWrapper, Paragraph, FormElementContainer } from "./styles";

// Расширьте компонент Input:
// он должен принимать в себя просу disabled. Если disabled === true, то Input становится серым и в него ничего нельзя вводить. Если disabled === false, то выглядит и работает в обычном режиме.
// он должен принимать в себя просу error. error должен быть undefined или строкой. Если error === "Some error", то у Input границы становится красные. Если error === undefined, то выглядит и работает в обычном режиме.
// Создайте компонент Homework_08 и импортируйте в него Input и Button. Отобразите все варианты Button и Input, в зависимости от того какие значения вы прокините в их пропсы(у Button - это disabled и isRed, у Input - это disabled и error)

function Homework_08() {
    const works = () => {
    console.log("Button works");//выводит сообщение в консоль
  };
  return (
    <PageWrapper>
      <Paragraph>HW8</Paragraph>
      <FormElementContainer><Button name="Simple button" onClick={works} /></FormElementContainer>
      <FormElementContainer><Button isRed name="Delete button" onClick={works} /></FormElementContainer>
      <FormElementContainer><Button disabled name="Disabled button" onClick={works} /></FormElementContainer>
      <FormElementContainer>
         <Input
          id="simple_input"
          label="Simple Input"
          name="simple"
          placeholder="Enter message"
        />
      </FormElementContainer>
      <FormElementContainer>
        <Input
          id="error_input"
          label="Error Input"
          name="error"
          placeholder="Enter message"
          error="This field is required"//строка не undefined, по заданию должна гореть красным
        />
      </FormElementContainer>
      <FormElementContainer>
        <Input
          id="disabled_input"
          label="Disabled Input"
          name="disabled"
          placeholder="Enter message"
          disabled
        />
      </FormElementContainer>
    </PageWrapper>
  );
}

export default Homework_08;
