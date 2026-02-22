// Требования:

// Создайте компонент Homework_07. Вынесете логику по управлению стейтом из компонента Feedback в компонент Homework_07, т.е компонент Homework_07 должен контролировать состояние компонента Feedback(пример такого поведения мы с вами разбирали с компонентом Counter)
import Feedback from "components/Feedback/Feedback"
import { v4 } from "uuid";
import "./styles.css";


function Homework_07() {
 
  return  (
     <div className="feedback-wrapper">
          <div className="feedback-control">
            <div className="buttonwithcount-container">
              <Button name="Like" onClick={onLike} />
              <p className="count">{like}</p>
            </div>
            <div className="buttonwithcount-container">
              <Button name="Dislike" onClick={onDislike} />
              <p className="count">{dislike}</p>
            </div>
          </div>
          <Button name="Reset Results" onClick={resetResults} />
        </div>
  );
}
export default Homework_07;
