import React from 'react';

const Answer = ({value, index, questionNum, questionNumHandler, correct, scoreHandler, score}) => {

  return (
    <div id={`answer${index}`} className='answer pointer' onClick={() => {
      questionNumHandler(questionNum + 1);
      if (value === correct) {
        scoreHandler(score + 100);
      } else {
        scoreHandler(score - 100);
      }
    }
    }>
      <h3>{value}</h3>
    </div>
  );

};

export default Answer;