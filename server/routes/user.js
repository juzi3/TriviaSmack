const express = require('express');
const triviaController = require('../controllers/triviaController');

const router = express.Router();

// access users
router.get('/users', 
  triviaController.getUsers,
  (req, res) => {
    // res.send('Hi');
    res.status(200).send(res.locals.users);
  });

// access questions
router.get('/questions', triviaController.getQuestions, (req, res) => {
  console.log('in secrets');
  res.status(200).send( {'Hi': res.locals.question} );
});

// access scores
router.get('/scores', triviaController.getScores, (req, res) => {
  console.log('in scores');
  res.status(200).send( {'Hi': res.locals.scores} );
});

module.exports = router;