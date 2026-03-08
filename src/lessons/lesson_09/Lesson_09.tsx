// import LoginForm from "components/LoginForm/LoginForm";
import Button from "components/Button/Button";
import { PageWrapper, ContainerFacts, Card, Text } from "./styles";

function Lesson_09() {//задача урока:  сделать input конролируемыми
  return (
    <PageWrapper>
      Lesson_09/Контроль элемента форм
        {/* <LoginForm /> */}
        <Card>Lesson_09/Контроль элемента форм
        <ContainerFacts>
          <Text></Text>
        </ContainerFacts>
        <Button name="Get cat fact" />
      </Card>
    </PageWrapper>
  );
}

export default Lesson_09;
