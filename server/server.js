const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const playRouter = require('./routes/api');
const userRouter = require('./routes/user');
const triviaController = require('./controllers/triviaController');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// connect to mongodb
const MONGO_URI = 'mongodb+srv://julmacalalag:5GxlXm4hwp6s69ZT@cluster0.16plj84.mongodb.net/?retryWrites=true&w=majority';

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
app.use(express.static(path.resolve(__dirname, '../client/dist')));

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

app.use(logger);

// route handlers
app.use('/play', playRouter);
app.use('/user', userRouter);

app.use('/', (req, res) => {
  console.log('served index.html');
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});


// handle signup
app.route('/signup')
  .get((req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')))
  .post(triviaController.createUser, (req, res) => {
    res.send('Hi');
  });

// handle login
app.post('/login', triviaController.verifyUser);

app.use('/secret/questions', triviaController.getQuestions, (req, res) => {
  console.log('in secrets');
  res.status(200).send( 'Hi', { questions: res.locals.question });
});

// 404 handler
app.use('*', (req, res) => {
  console.log('ERRRROR');
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({error: err});
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;