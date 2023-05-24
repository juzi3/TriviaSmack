import React from 'react';

const Question = ({details, questionNum, categoryHandler}) => {
  // console.log(details[questionNum].question, 'in question', questionNum);
  // let display;
  // if (!question.question) {
  //   // changer(null);
  //   display = (
  //     'New Question'
  //   );
  // } else {
  //   display = (
  //     question.question.text
  //   );
  // }

  if (questionNum > 10) {
    categoryHandler(null);
  }
  const {question} = details[questionNum];
  return (
    <div id='question'>
      <h2>{question.text}</h2>
    </div>
  );

};

export default Question;