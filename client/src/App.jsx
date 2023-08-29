import React, { useEffect, useState, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "../styles.css";
import Play from "./components/Play";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import LeaderBoard from "./components/LeaderBoard";
import Auth from "../../server/auth";
import { UserContext } from "./UserContext";

const App = () => {
  // moved to homepage
  // const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState({});
  const [questionNum, setQuestionNum] = useState(0);
  // const [details, setDetails] = useState({});
  const [score, setScore] = useState(0);
  const [clickedPlay, setPlay] = useState(false);
  const [leaders, setLeaders] = useState(null);

  const [user, setUser] = useContext(UserContext).userValue;

  const reset = () => {
    // setCategory(null);
    setScore(0);
    setQuestion({});
    setQuestionNum(0);
    setPlay(false);
    return;
  };

  useEffect(() => {
    const fetchLeaders = async () => {
      console.log("fetchLeaders fired!");
      const res = await fetch("/secret/scores");
      const data = await res.json();
      data.sort((a, b) => b.score - a.score);
      if (data.length !== 5) {
        while (data.length < 6) {
          data.push([{ username: null, score: null }]);
        }
      }
      setLeaders(data.slice(0, 5));
    };
    fetchLeaders();
  }, []);

  return (
    // add navbar
    <>
      <nav>
        <ul>
          <div id="left-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </div>
          <div id="center-nav">
            <Link to="/">
              <h1 onClick={() => reset()} id="game-title" className="pointer">
                {" "}
                TriviaSmack
              </h1>
            </Link>
          </div>
          <div id="right-nav">
            {!user ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <h3 id="nav-user-display" aria-label={user}>
                    {user[0]}
                  </h3>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play/:id" element={<Play />} />
          <Route
            path="/leaderboard"
            element={<LeaderBoard leaders={leaders} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
