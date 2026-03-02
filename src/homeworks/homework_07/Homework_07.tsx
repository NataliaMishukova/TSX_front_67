import { useState } from "react";

import Feedback from "components/Feedback/Feedback";
import "./styles.css";

// Требования:

// Создайте компонент Homework_07. Вынесете логику по управлению стейтом из компонента Feedback в компонент Homework_07, т.е компонент Homework_07 должен контролировать состояние компонента Feedback(пример такого поведения мы с вами разбирали с компонентом Counter)

function Homework_07() {
  const [like, setLike] = useState<number>(0); 
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  console.log("Component Feedback rendering!!!");

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };
  return (
    <div className="homework_07_page_wrapper">
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}
export default Homework_07;
