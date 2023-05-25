const mongoose = require('mongoose');

// const MONGO_URI = 'url';

// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'trivia'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));

const Schema = mongoose.Schema;

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

const scoreSchema = new Schema({
  username: String,
  score: Number
});

const Score = mongoose.model('score', scoreSchema);

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

const User = mongoose.model('user', userSchema);


// exports all the models in an object to be used in the controller
module.exports = {
  Question,
  Score,
  User
};
