const { User, Question, Score } = require('../models/triviaModels');

const triviaController = {};

// verify for login
triviaController.verifyUser = async (req, res, next) => {

  try {
    const { username, password } = req.body;
    if (!username || !password) return res.redirect('/signup');

    const foundUser = await User.findOne({username, password});
    res.locals.user = foundUser;
    return next();
  } catch(err) {
    res.status(500);
    return next(err);
  }

};

// create User during signup
triviaController.createUser = async (req, res, next) => {

  try {

    const { username, password } = req.body;
  
    if (username && password) {
      User.create({username, password});
      return res.redirect('/play');
    } else {
      res.status(500);
      return next({error: 'Error when creating user'});
    }

  } catch(err) {
    return next(err);
  }

};

triviaController.getUsers = async (req, res, next) => {

  try {
    
    const usersFound = await User.find({});
    res.locals.users = usersFound;
    return next();
  } catch(err) {
    return next({error: err});
  }

};

triviaController.getQuestions = async (req, res, next) => {

  try {
    
    const questionFound = await Question.find({});
    res.locals.question = questionFound[0];
    return next();
  } catch(err) {
    return next({error: err});
  }

};

module.exports = triviaController;