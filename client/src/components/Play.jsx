import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ScoreDisplay from "./ScoreDisplay";
import AnswersContainer from "../containers/AnswersContainer";
import { UserContext } from "../UserContext";

const Play = () => {
  const [streak, setStreak] = useState(0);
  const [question, setQuestion] = useState({});
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedPlay, setPlay] = useState(false);
  const [time, setTimer] = useState(30);
  const [user] = useContext(UserContext).userValue;

  const navigate = useNavigate();

  const reset = () => {
    setStreak(0);
    setScore(0);
    setQuestion({});
    setQuestionNum(0);
  };

  // makes fetch request to questions api
  const handleFetch = async () => {
    try {
      const res = await fetch("https://the-trivia-api.com/v2/questions");
      const data = await res.json();
      const details = {};

      for (let i = 0; i < 10; i++) {
        details[i] = {};
        const { correctAnswer, incorrectAnswers } = data[i];
        const answers = [correctAnswer, ...incorrectAnswers];
        for (let i = answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answers[i], answers[j]] = [answers[j], answers[i]];
        }

        details[i].answers = answers;
        details[i].question = data[i].question;
        details[i].correctAnswer = correctAnswer;
      }

      setQuestion(details);
    } catch (err) {
      console.log("Error in app: fetch to api", err);
    }
  };

  const handleSendScore = async () => {
    try {
      const res = await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: user, score }),
      });
      const data = await res.json();

      if (data.message === "Score added") navigate("/leaderboard");
    } catch (err) {
      console.log(`Error in handleSendScore: ${err}`);
    }
  };

  // when clickedPlay changes questionNum resets to 0 and new set of questions fetched
  useEffect(() => {
    // using api, might need new api
    setQuestionNum(0);
    console.log("useEffect fired");
    handleFetch();
  }, [clickedPlay]);

  // decrements timer
  useEffect(() => {
    if (clickedPlay) {
      const timer = setInterval(() => {
        if (time > 0) {
          setTimer(time - 1);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time, clickedPlay]);

  // resets timer and question num
  const startTimer = () => {
    setQuestionNum(10);
    setTimer(30);
  };
  const { id } = useParams();
  console.log(id, "in play", time);

  let display;
  // checks if play button clicked
  if (clickedPlay) {
    // checks if current question is the last one. If isn't then goes to next question
    if (questionNum < 10 && time > 0) {
      display = (
        <div id="in-game-container">
          <ScoreDisplay value={score} time={time} />
          <div id="question">
            <h2 id="question-heading">{question[questionNum].question.text}</h2>
          </div>
          <AnswersContainer
            details={question}
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
          <div
            className="again-btn"
            onClick={() => {
              reset();
              setPlay(false);
            }}
          >
            <h2 className="pointer">Play Again?</h2>
          </div>

          <Link to="/">
            <div
              className="again-btn"
              onClick={() => {
                reset();
                setPlay(false);
              }}
            >
              <h2 className="pointer">No!</h2>
            </div>
          </Link>
          <input
            className="submit-btn pointer"
            type="submit"
            value="Send Score!"
            onClick={() => handleSendScore()}
          />
        </div>
      );
    }
  } else {
    display = (
      <button
        id="play"
        className="pointer"
        onClick={() => {
          setPlay(true);
          startTimer();
        }}
      >
        Play
      </button>
    );
  }

  return <div id="play-section">{display}</div>;
};

export default Play;
