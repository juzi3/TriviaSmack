const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const playRouter = require('./routes/api');
const triviaController = require('./controllers/triviaController');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// connect to mongodb
const MONGO_URI = 'test';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'trivia'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

// handle reqs for static files
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/', (req, res) => {
  console.log('served index.html');
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// route handlers
app.use('/play', playRouter);

// handle signup
app.post('/signup', triviaController.createUser);

// handle login
app.post('/login', triviaController.verifyUser);

app.use('/secret/questions', triviaController.getQuestions, (req, res) => {
  console.log('in secrets');
  res.send( { questions: res.locals.question });
});

// 404 handler
app.use('*', (req, res) => res.status(404).send('Not Found'));

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({error: err});
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;