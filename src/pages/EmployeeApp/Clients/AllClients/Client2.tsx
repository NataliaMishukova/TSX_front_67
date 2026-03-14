import { PageWrapper, Title, Info, Text, Foto, ButtonControl } from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Client2() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <Title> Siemens AG</Title>
      <Info>
        <Text>
          Siemens AG — немецкий конгломерат, работающий в области
          электротехники, электроники, энергетического оборудования, транспорта,
          медицинского оборудования и светотехники, а также специализированных
          услуг в различных областях промышленности, транспорта и связи. Главная
          контора находится в Мюнхене.
        </Text>
        <Foto></Foto>
      </Info>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" color=""/>
      </ButtonControl>
    </PageWrapper>
  );
}

export default Client2;
