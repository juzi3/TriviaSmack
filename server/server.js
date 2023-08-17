require("dotenv").config();
import { resolve } from "path";
import express, { json, urlencoded } from "express";
import { connect } from "mongoose";

const app = express();

import playRouter from "./routes/api";
import userRouter from "./routes/user";
import {
  createUser,
  verifyUser,
  addScore,
} from "./controllers/triviaController";
import { setCookie, startSession } from "./controllers/cookieSessionController";

const PORT = 3000;

app.use(json());
app.use(urlencoded());

// connect to mongodb
connect(process.env.MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: "trivia",
})
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

// handle reqs for static files
app.use(express.static(resolve(__dirname, "../client/dist")));

// shows current path in console
const logger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

app.use(logger);

// route handlers
// takes u to play
// app.use('/play', playRouter);
// access questions, users, scores
app.use("/secret", userRouter);

// handle signup
app
  .route("/signup")
  .get((req, res) =>
    res.status(200).sendFile(resolve(__dirname, "../client/dist/index.html"))
  )
  .post(createUser, setCookie, startSession, (req, res) => {
    res.status(200).redirect(`/play/${res.locals.user.username}`);
  });

// handle login
app
  .route("/login")
  // .get((req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/dist/index.html')))
  .post(verifyUser, setCookie, startSession, (req, res) => {
    res.status(200).redirect(`/play/${res.locals.user.username}`);
  });

app
  .route("/leaderboard")
  .get((req, res) =>
    res.status(200).sendFile(resolve(__dirname, "../client/dist/index.html"))
  )
  .post(addScore, (req, res) => {
    res.status(200).redirect("/leaderboard");
  });

app.use("/", (req, res) => {
  console.log("served index.html");
  return res
    .status(200)
    .sendFile(resolve(__dirname, "../client/dist/index.html"));
});

// 404 handler
app.use((req, res) => res.status(404).send("Not Found"));

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
