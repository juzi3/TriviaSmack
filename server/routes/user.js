import { Router } from "express";
import triviaController from "../controllers/triviaController.js";

const router = Router();

// access users
router.get("/users", triviaController.getUsers, (req, res) => {
  // res.send('Hi');
  res.status(200).send(res.locals.users);
});

// access questions
router.get("/questions", triviaController.getQuestions, (req, res) => {
  console.log("in secrets");
  res.status(200).send(res.locals.question);
});

// access scores
router.get("/scores", triviaController.getScores, (req, res) => {
  console.log("in scores");
  return res.status(200).json(res.locals.scores);
});

export default router;
