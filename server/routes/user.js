const express = require('express');
const triviaController = require('../controllers/triviaController');

const router = express.Router();

router.get('/', 
  triviaController.getUsers,
  (req, res) => {
    res.status(200).send(res.locals.users);
  });

module.exports = router;