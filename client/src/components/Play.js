import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cookie from 'js-cookie';

import ScoreDisplay from './ScoreDisplay';
import Question from './Question';
import AnswersContainer from '../containers/AnswersContainer';

const Play = () => {

  const [streak, setStreak] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedPlay, setPlay] = useState(false);
  // const [time, setTimer] = useState(30);

  const reset = () => {
    setStreak(0);
    setScore(0);
    setQuestion({});
    setQuestionNum(0);
    // setTimer(30);
  };

  // makes fetch request to questions api
  const handleFetch = async () => {
    try {
      const res = await fetch('https://the-trivia-api.com/v2/questions');
      const data = await res.json();
      setQuestion(data);
    } catch(err) {
      console.log('Error in app: fetch to api', err);
    }
  };
  
  // when clickedPlay changes questionNum resets to 0 and new set of questions fetched
  useEffect( () => {
    // using api, might need new api
    setQuestionNum(0);
    console.log('useEffect fired');
    handleFetch();
  }, [clickedPlay]);

  // const startTimer = () => {
  //   if (time > 0) {
  //     setTimer(time - 1);
  //   } else {
  //     setQuestionNum(10);
  //     setTimer(30);
  //   }
  // };
  const { id } = useParams();
  console.log(id, 'in play');

  let display;
  // checks if play button clicked
  if (clickedPlay) {
    // checks if current question is the last one. If isn't then goes to next question
    if (questionNum < 10) {
      display = (
        <div id="in-game-container">
          <ScoreDisplay value={score} time={30} />
          <Question details={question} questionNum={questionNum} />
          <AnswersContainer details={question}
            questionNum={questionNum}
            questionNumHandler={setQuestionNum}
            score={score}
            scoreHandler={setScore}
            streakHandler={setStreak}
            streak={streak}
          />
        </div>
      );
      // when no more q's, asks if you want to play again
    } else {

      display = (
        <div id="play-again">
          <h1>Final Score: {score}</h1>
          <div className="again-btn" onClick={() => {
            reset();
            setPlay(false);
          }}>
            <h2 className="pointer">Play Again?</h2>
          </div>
  
          <Link to='/'>
            <div className="again-btn" onClick={() => {
              reset();
              setPlay(false);
            }}>
              <h2 className="pointer">No!</h2>
            </div>
          </Link>

          <form method="POST" action='/leaderboard'>
            <input className='submit-btn pointer' type='submit' value="Send Score!" />
            <input name="username" type="text" value={Cookie.get('username')} className='hidden-input'></input>
            <input name="score" type="text" value={score} className='hidden-input'></input>
          </form>
  
        </div>
      );

    }
  } else {

    display = (
  
      <button id='play' className='pointer' onClick={() => {
        setPlay(true);
        // startTimer();
      }}>Play</button> 
        
    );
    
  }

  return (
    
    <div id='play-section'>

      {display}
      
    </div>

  );

};

export default Play;
