import React from 'react';

const Answer = ({value, index, questionNum, questionNumHandler, correct, scoreHandler, score, streak, streakHandler}) => {

  return (
    <div id={`answer${index}`} className='answer pointer' onClick={() => {
      questionNumHandler(questionNum + 1);
      if (value === correct) {
        
        scoreHandler(score + 100 + (100 * streak));
        streakHandler(streak + 1);
      } else {
        scoreHandler(score - 100);
        streakHandler(0);
      }
    }
    }>
      <h3>{value}</h3>
    </div>
  );

};

export default Answer;