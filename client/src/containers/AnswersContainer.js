import React from 'react';
import Answer from '../components/Answer';

const AnswersContainer = ({details, questionNumHandler, questionNum, scoreHandler, score, streak, streakHandler}) => {

  const { correctAnswer, incorrectAnswers } = details[questionNum];

  const answers = [correctAnswer, ...incorrectAnswers];

  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }

  // console.log(details[questionNum], 'in answer');
  return (
    <div id='answer-container'>
      {answers.map((elem, i) => {
        return <Answer 
          key={i} 
          index={i} 
          value={elem} 
          correct={correctAnswer} 
          questionNum={questionNum} 
          questionNumHandler={questionNumHandler} 
          scoreHandler={scoreHandler} 
          score={score}
          streak={streak}
          streakHandler={streakHandler} />;
      })}
    </div>
  );

};

export default AnswersContainer;