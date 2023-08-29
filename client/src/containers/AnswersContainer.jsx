import React from "react";

const AnswersContainer = ({
  details,
  questionNumHandler,
  questionNum,
  scoreHandler,
  score,
  streak,
  streakHandler,
}) => {
  const { answers, correctAnswer } = details[questionNum];

  const clickHandler = (ans) => {
    questionNumHandler(questionNum + 1);
    if (ans === correctAnswer) {
      scoreHandler(score + 100 + 100 * streak);
      streakHandler(streak + 1);
    } else {
      scoreHandler(score - 100);
      streakHandler(0);
    }
  };

  return (
    <div id="answer-container">
      {answers.map((elem, i) => {
        return (
          <div
            key={elem + questionNum}
            id={`answer${i}`}
            className="answer pointer"
            onClick={(e) => clickHandler(e.target.textContent)}
          >
            <h3>{elem}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AnswersContainer;
