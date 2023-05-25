const { Session } = require('../models/triviaModels');

const cookieSessionController = {};

cookieSessionController.setCookie = async (req, res, next) => {

  try {
    console.log(res.locals.user, 'locals.user');
    const { id, username } = res.locals.user;
    res.cookie('ssid', id);
    res.cookie('username', username);
    return next();
  } catch(err) {
    return next(err);
  }
};
cookieSessionController.startSession = async (req, res, next) => {

  const { id } = res.locals.user;
  try {
    const sessionDoc = await Session.create({ cookieId: id});
    return next();
  } catch(err) {
    return next(err);
  }
};

module.exports = cookieSessionController;