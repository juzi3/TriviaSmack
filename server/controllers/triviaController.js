import { User, Question, Score } from '../models/triviaModels';

const triviaController = {};

// verify for login
triviaController.verifyUser = async (req, res, next) => {

  try {
    const { username, password } = req.body;
    if (!username || !password) return res.redirect('/signup');

    const foundUser = await User.findOne({username, password});
    res.locals.user = foundUser;
    return res.redirect('/home');
  } catch(err) {
    res.status(500).send({error: `Error in verifyUser ${err}`});
  }

};

// create User during signup
triviaController.createUser = (req, res, next) => {

  const { username, password } = req.body;

  if (username && password) {
    User.create({username, password});
    return res.redirect('/play');
  } else {
    res.status(500).send({error: 'Error when creating user'});
    return next();
  }

};

triviaController.getQuestions = async (req, res, next) => {
  Question.find({}, (err, questions) => {
    if (err) return next('Error in getQuestions: ' + JSON.stringify(err));

    res.locals.question = questions;
    return next();
  });

};

export default triviaController;