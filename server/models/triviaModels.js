import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

// question schema
const questionSchema = new Schema({
  category: String,
  correctAnswer: String,
  difficulty: String,
  incorrectAnswer: Array,
  question: {
    text: String,
  },
});

const Question = model("question", questionSchema);

// score schema
const scoreSchema = new Schema({
  username: String,
  score: Number,
});

const Score = model("score", scoreSchema);

// user schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("user", userSchema);

// session schema
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now },
});

const Session = model("session", sessionSchema);

// exports all the models in an object to be used in the controller
export default {
  Question,
  Score,
  User,
  Session,
};
