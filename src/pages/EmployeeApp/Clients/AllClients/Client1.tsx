import { PageWrapper, Title, Info, Text, Foto, ButtonControl } from "./styles";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

function Client1() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <Title>Facebook</Title>
      <Info>
        <Text>
          Facebook («Фейсбук») — американская социальная сеть, основанная в 2004
          году Марком Цукербергом и его соседями по комнате во время обучения в
          Гарвардском университете — Эдуардо Саверином, Дастином Московицем и
          Крисом Хьюзом.
        </Text>
        <Foto></Foto>
      </Info>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Client1;
