const path = require('path');
const express = require('express');

const app = express();

const playRouter = require('./routes/api');
const triviaController = require('./controllers/triviaController');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

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