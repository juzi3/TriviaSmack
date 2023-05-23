const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// handle reqs for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// route handlers
app.use('/api', apiRouter);

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