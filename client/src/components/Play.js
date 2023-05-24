import React from 'react';
import { redirect } from 'react-router-dom';

import ScoreDisplay from './ScoreDisplay';
import Question from './Question';
import AnswersContainer from '../containers/AnswersContainer';

const Play = ({         
  score,
  scoreHandler,
  details,
  questionNum,
  questionNumHandler,
  category,
  categoryHandler,
  clickedPlay,
  playHandler,
  reset,
}) => {

  let display;

  // checks if play button clicked
  if (clickedPlay) {
    // if clicked checks if category has been picked yet, if category isn't null, game begins
    // if (category !== null) {
    // checks if current question is the last one. If isn't then goes to next question
    if (questionNum < 10) {
      display = (
        <div id="in-game-container">
          <ScoreDisplay value={score} />
          <Question details={details} questionNum={questionNum} categoryHandler={categoryHandler} />
          <AnswersContainer details={details} questionNum={questionNum} questionNumHandler={questionNumHandler} score={score} scoreHandler={scoreHandler} />
        </div>
      );
      // when no more q's, asks if you want to play again
    } else {

      display = (

        <div id="play-again">
  
          <h1>Final Score: {score}</h1>
          <div id="again-btn" onClick={() => {
            reset();
            if (category) {
              categoryHandler(null);
            } else {
              categoryHandler('not null');
            }
          }}>
            <h2 className="pointer">Play Again?</h2>
          </div>
  
          <div id="again-btn" onClick={() => {
            reset();
            playHandler(false);
          }}>
            <h2 className="pointer">No!</h2>
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

      <button id='play' className='pointer' onClick={() => playHandler(true)}>Play</button> 
      
    );
  }

  return (
    
    <div id='play-section'>

      {display}
      
    </div>

  );

};

export default Play;
