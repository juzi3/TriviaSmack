import Models from "../models/triviaModels.js";

const triviaController = {};

// verify for login
triviaController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ error: "missing username/password" });
  }
  try {
    const foundUser = await Models.User.findOne({ username, password });
    if (foundUser) {
      res.locals.user = foundUser;
      return next();
    } else {
      return res.json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500);
    return next({ error: err });
  }
};

// create User during signup
triviaController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const foundUser = await Models.User.findOne({ username, password });
    if (foundUser) {
      return next({ error: "User already exists" });
    }
    if (username && password) {
      const createdUser = await Models.User.create({ username, password });
      res.locals.user = createdUser;
      return next();
    } else {
      res.status(500);
      return next({ error: "Missing username/password" });
    }
  } catch (err) {
    return next({ error: err });
  }
};

triviaController.getUsers = async (req, res, next) => {
  try {
    const usersFound = await Models.User.find({});
    res.locals.users = usersFound;
    return next();
  } catch (err) {
    return next({ error: err });
  }
};

triviaController.getQuestions = async (req, res, next) => {
  try {
    const questionFound = await Models.Question.find({});
    res.locals.question = questionFound[0];
    return next();
  } catch (err) {
    return next({ error: err });
  }
};

triviaController.getScores = async (req, res, next) => {
  try {
    const scoreFound = await Models.Score.find({});
    res.locals.scores = scoreFound;
    return next();
  } catch (err) {
    return next({ error: err });
  }
};

triviaController.addScore = async (req, res, next) => {
  try {
    const { username, score } = req.body;

    if (score !== null && score !== undefined) {
      if (!username) {
        await Models.Score.create({ username: "Guest", score });
        return next();
      }
      await Models.Score.create({ username, score });
      return next();
    } else {
      return next({ error: "No score to send" });
    }
  } catch (err) {
    return next({ error: err });
  }
};

export default triviaController;
