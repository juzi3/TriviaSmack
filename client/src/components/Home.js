import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Play from './Play';

// import CategoryDisplay from './CategoryDisplay';
// import ScoreDisplay from './ScoreDisplay';
// import AnswersContainer from '../containers/AnswersContainer';

const Home = () => {

  // const [category, setCategory] = useState(null);
  // const [question, setQuestion] = useState({});
  // const [questionNum, setQuestionNum] = useState(0);
  // const [details, setDetails] = useState({});
  // const [score, setScore] = useState(0);
  // const [clickedPlay, setPlay] = useState(false);
  // // console.log(category, 'above useEffect');

  // const reset = () => {
  //   setCategory(null);
  //   setScore(0);
  //   setQuestion({});
  //   setQuestionNum(0);
  // };

  // useEffect(() => {
  //   // using api, might need new api
  //   setQuestionNum(0);
  //   fetch('https://the-trivia-api.com/v2/questions')
  //     .then(res => res.json())
  //     .then(data => {
  //       // setDetails(data);
  //       // for (const d of data) {
  //       //   console.log(d, 'in if')
  //       //   if (d.category === category) {
  //       //     setQuestion(d);
  //       //     console.log(question);
  //       //   }
  //       // }
  //       setQuestion(data);
  //     })
  //     .catch(err => console.log('Error in app: fetch to api', err));
  // }, [clickedPlay, category]);

  // let display;

  // // checks if play button clicked
  // if (clickedPlay) {
  //   // if clicked checks if category has been picked yet, if category isn't null, game begins
  //   // if (category !== null) {
  //   // checks if current question is the last one. If isn't then goes to next question
  //   if (questionNum < 10) {
  //     display = (
  //       <div id="in-game-container">
  //         <ScoreDisplay value={score} />
  //         <Question details={question} questionNum={questionNum} categoryHandler={setCategory} />
  //         <AnswersContainer details={question} questionNum={questionNum} questionNumHandler={setQuestionNum} score={score} scoreHandler={setScore} />
  //       </div>
  //     );
  //     // when no more q's, asks if you want to play again
  //   } else {

  //     display = (
  //       <div id="play-again">
  
  //         <h1>Final Score: {score}</h1>
  //         <div id="again-btn" onClick={() => {
  //           reset();
  //           if (category) {
  //             setCategory(null);
  //           } else {
  //             setCategory('not null');
  //           }
  //         }}>
  //           <h2 className="pointer">Play Again?</h2>
  //         </div>
  
  //         <div id="again-btn" onClick={() => {
  //           reset();
  //           setPlay(false);
  //         }}>
  //           <h2 className="pointer">No!</h2>
  //         </div>
  
  //       </div>
  //     );

  //   }
  // if category if null and play button has been clicked then go to choose category
  // } else {
      
  // display = (
  //   <CategoryDisplay clickHandler={setCategory} />
  // );
  // }
  // if play button hasn't been clicked then display is just play button
  // } else {
  //   display = (

  //     <Play clickHandler={setPlay}/>
      
  //   );
  // }
  // {display}

  // const data = {score: score,
  //   scoreHandler: setScore,
  //   details: question,
  //   questionNum: questionNum,
  //   questionNumHandler: setQuestionNum,
  //   category: category,
  //   categoryHandler: setCategory,
  //   clickedPlay: clickedPlay,
  //   playHandler: setPlay,
  //   reset: reset};
  
  return (
    <div id='home-page'>

      <h1>Welcome</h1>

      <div>
        <Link to='/Login'>
          <h2 className='enter-heading'>Login</h2>
        </Link>
        <span id='or'>Or</span>
        <Link to='/play'>
          <h2 className='enter-heading'>Play as Guest</h2>
        </Link>
      </div>

      {/* <Routes>
        <Route path='/play' element={<Play />} />
      </Routes> */}
    </div>
    
  );
    
};
  
  
export default Home;
  