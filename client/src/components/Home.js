import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Play from './Play';
import CategoryDisplay from './CategoryDisplay';
import ScoreDisplay from './ScoreDisplay';
import Question from './Question';
import AnswersContainer from '../containers/AnswersContainer';

const Home = () => {

  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionNum, setQuestionNum] = useState(0);
  const [details, setDetails] = useState({});
  const [score, setScore] = useState(0);
  const [clickedPlay, setPlay] = useState(false);
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
  }, [clickedPlay, ]);

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

  // checks if play button clicked
  if (clickedPlay) {
    // if clicked checks if category has been picked yet, if category isn't null, game begins
    // if (category !== null) {
    // checks if current question is the last one. If isn't then goes to next question
    if (questionNum < 10) {
      display = (
        <div id="in-game-container">
          <ScoreDisplay value={score} />
          <Question details={question} questionNum={questionNum} categoryHandler={setCategory} />
          <AnswersContainer details={question} questionNum={questionNum} questionNumHandler={setQuestionNum} score={score} scoreHandler={setScore} />
        </div>
      );
      // when no more q's, asks if you want to play again
    } else {

      display = (
        <div id="play-again">
  
          <h1>Final Score: {score}</h1>
          <div id="again-btn" className="pointer" onClick={() => reset()}>
            <h2>Play Again?</h2>
          </div>
  
          <div id="again-btn" className="pointer" onClick={() => {
            reset();
            setPlay(false);
          }}>
            <h2>No!</h2>
          </div>
  
        </div>
      );

    }
    // if category if null and play button has been clicked then go to choose category
    // } else {
      
    // display = (
    //   <CategoryDisplay clickHandler={setCategory} />
    // );
    // }
    // if play button hasn't been clicked then display is just play button
  } else {
    display = (

      <Play clickHandler={setPlay}/>
      
    );
  }

  return (
    <div id='home-page'>
      {display}
    </div>
  );

};


export default Home;