import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

import '../styles.css';
import Play from './components/Play';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import LeaderBoard from './components/LeaderBoard';
import Auth from '../../server/auth';

const App = () => {

  // moved to homepage
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
    setPlay(false);
    return;
  };
  
  // try using uselocation to see if path is ../play/someUsername
  const location = useLocation();
  // let display = <Link to='/login'>Login</Link>;
  // // const isLoggedIn = localStorage.getItem('username');
  // if (!Auth.isLoggedIn) {
  //   display = (
  //     <li>
  //       <Link to='/login'>Login</Link>
  //     </li>
  //   );
  // } else {
  //   display = (
  //     <li onClick={() => Auth.isLoggedIn = false}>
  //       <Link to='/logout'>Logout</Link>
  //     </li>
  //   );
  // }

  return (
    
  // add navbar
    <>
      <nav>
        <ul>
          <div id='left-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/leaderboard'>Leaderboard</Link>
            </li>
          </div>
          <div id="center-nav">
            <Link to='/'>
              <h1 onClick={() => reset()} id='game-title' className='pointer'> TriviaSmack</h1>
            </Link>
          </div>
          <div id="right-nav">
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign up</Link>
            </li>
          </div>
        </ul>
      </nav>

      <div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={<Play />} />
          <Route path='/play/:player' element={<Play />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      
      </div>
    </>

  );

};

export default App;