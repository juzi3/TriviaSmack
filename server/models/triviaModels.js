const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// question schema
const questionSchema = new Schema({
  category: String,
  correctAnswer: String,
  difficulty: String,
  incorrectAnswer: Array,
  question: {
    text: String
  }
});

const Question = mongoose.model('question', questionSchema);

// score schema
const scoreSchema = new Schema({
  username: String,
  score: Number
});

const Score = mongoose.model('score', scoreSchema);

// user schema
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const User = mongoose.model('user', userSchema);

// session schema
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true},
  createdAt: { type: Date, expires: 30, default: Date.now }
});

const Session = mongoose.model('session', sessionSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Question,
  Score,
  User,
  Session 
};
