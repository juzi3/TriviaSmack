import "dotenv/config";
import path, { resolve } from "path";
import express, { json, urlencoded } from "express";
import { connect } from "mongoose";

const app = express();

import userRouter from "./routes/user.js";
import Trivia from "./controllers/triviaController.js";
import CookieSession from "./controllers/cookieSessionController.js";
import { fileURLToPath } from "url";

const PORT = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.use(json());
app.use(urlencoded({ extended: true }));

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

app.use("/secret", userRouter);

// handle signup
app.post("/api/signup", Trivia.createUser, (req, res) => {
  res.status(200).json({ username: res.locals.user });
});

// handle login
app.post(
  "/api/login",
  Trivia.verifyUser,
  CookieSession.setCookie,
  CookieSession.startSession,
  (req, res) => {
    res.status(200).json({ username: res.locals.user.username });
  }
);

app.post("/api/leaderboard", Trivia.addScore, (req, res) => {
  res.status(200).json({ message: "Score added" });
});

app.use("/", (req, res) => {
  return res
    .status(200)
    .sendFile(resolve(__dirname, "../client/dist/index.html"));
});

// 404 handler
app.use("*", (req, res) => res.status(404).send("Not Found"));

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
