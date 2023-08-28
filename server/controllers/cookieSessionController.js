import SessionModel from "../models/triviaModels.js";

const cookieSessionController = {};

cookieSessionController.setCookie = async (req, res, next) => {
  try {
    const { id, username } = res.locals.user;
    res.cookie("ssid", id, { httpOnly: true });
    res.cookie("username", username, { httpOnly: true });
    return next();
  } catch (err) {
    return next(err);
  }
};
cookieSessionController.startSession = async (req, res, next) => {
  const { id } = res.locals.user;
  try {
    const sessionDoc = await SessionModel.Session.create({ cookieId: id });
    return next();
  } catch (err) {
    return next(err);
  }
};

export default cookieSessionController;
