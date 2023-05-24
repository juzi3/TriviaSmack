import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles.css';
import Play from './components/Play';
import CategoryDisplay from './components/CategoryDisplay';
import ScoreDisplay from './components/ScoreDisplay';
import Question from './components/Question';
import AnswersContainer from './containers/AnswersContainer';

const sportsData = require('../data/sports.json');

const App = () => {

  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionNum, setQuestionNum] = useState(0);
  const [details, setDetails] = useState({});
  const [score, setScore] = useState(0);
  // console.log(category, 'above useEffect');

  const reset = () => {
    setCategory(null);
    setScore(0);
    setQuestion({});
    setQuestionNum(0);
    return;
  };

  useEffect(() => {
    // using api, might need new api
    setQuestionNum(0);
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(data => {
        // setDetails(data);
        // for (const d of data) {
        //   console.log(d, 'in if')
        //   if (d.category === category) {
        //     setQuestion(d);
        //     console.log(question);
        //   }
        // }
        setQuestion(data);
      })
      .catch(err => console.log('Error in app: fetch to api', err));
    // setQuestion(sportsData);
  }, [category]);

  console.log('under useEffect', question);

  let display;
  // switch(category) {
  // case 'science' :
  //   display = (
  //     <div>
  //       <Question question={question} changer={setQuestion} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'film_and_tv' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'music' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'history' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'sports_and_leisure' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'arts_and_literature' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'food_and_drink' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'general_knowledge' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  // case 'society_and_culture' :
  //   display = (
  //     <div>
  //       <Question question={question} />
  //       <AnswersContainer details={question} />
  //     </div>
  //   );
  //   break;
  if (category !== null) {
    if (questionNum < 10) {
      display = (
        <div id="in-game-container">
          <ScoreDisplay value={score} />
          <Question details={question} questionNum={questionNum} categoryHandler={setCategory} />
          <AnswersContainer details={question} questionNum={questionNum} questionNumHandler={setQuestionNum} score={score} scoreHandler={setScore} />
        </div>
      );
    } else {
      display = (
        <div id="play-again">

          <h1>Final Score: {score}</h1>
          <div id="again-btn" className="pointer" onClick={() => reset()}>
            <h2>Play Again?</h2>
          </div>

          <div id="again-btn" className="pointer">
            <h2>No!</h2>
          </div>

        </div>
      );
    }
  } else {
    
    display = (
      <CategoryDisplay clickHandler={setCategory} />
    );
  }
  // default:
  //   display = (
  //     <CategoryDisplay clickHandler={setCategory} />
  //   );
  // }


  return (

    <div>

      <h1 onClick={() => reset()} id='game-title' className='pointer'> Trivia Game</h1>
      <Play />
      {display}
      
    </div>

  );

};

export default App;