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
      <Title>BMW Group</Title>
      <Info>
        <Text>
          BMW Group — ведущий немецкий производитель автомобилей и мотоциклов
          премиум-класса, основанный в 1916 году в Мюнхене. Владеет брендами
          BMW, MINI, Rolls-Royce и BMW Motorrad. Компания славится инновациями,
          спортивным характером автомобилей, а ее девиз — «С удовольствием за
          рулем» (Freude am Fahren)
        </Text>
        <Foto></Foto>
      </Info>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Client2;
