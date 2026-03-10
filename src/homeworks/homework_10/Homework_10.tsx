import axios from "axios";
import { useEffect, useState } from "react";

import { PageWrapper, ContainerFacts, Card, Text, ErrorText} from "./styles";
import Button from "components/Button/Button";
// Создайте компоент Homework_10. В нем вам нужно будет сделать следующее:

// при монтировании компонента Homework_10, сделайте GET запрос на api сервис: https://official-joke-api.appspot.com/random_joke
// Если запрос выполниться успешно, то положите данные со случайными шутками в state и отобразите их в карточке.

// Если запрос выполнится с ошибкой, создайте стейт с ошибкой и положите туда строку "Some Network Error"

// добавьте на страницу кнопку, при клике на которую выполняется новый запрос на https://official-joke-api.appspot.com/random_joke и при ответе обновляется стейт с ошибкой или стейтом с полученными данными
// стили на ваши усмотрение

function Homework_10() {
  const [joke, setJokes] = useState<undefined | string>(undefined);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE: string = "https://official-joke-api.appspot.com/random_joke";

  //создаем стрелочную функцию которая будет отправлять запрос
  const getJoke = async () => {
    setJokes(undefined);
    setError(undefined);
    setIsLoading(true);
    try {
      const response = await axios.get(JOKE);
      const data = response.data;
      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      setJokes(`${data.setup} 
        ${data.punchline}`);
    } catch (error: any) {
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      setError(error.message);
      //   setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };
  //нам нужно вызвать нашу функци getjoke. , для этого нам нужно воспользоваться методом жизненного цикла maunting
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          {!!joke && <Text>{joke} </Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
        <Button disabled={isLoading} name="Get joke" onClick={getJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_10;
