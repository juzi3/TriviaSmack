const express = require('express');
const path = require('path');

const triviaController = require('../controllers/triviaController');
const router = express.Router();

router
  .get('/', (req, res) => {
    // res.send('hi');
    res.status(200).sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
// .get('/login', (req, res) => {
//   // res.redirect('/play');
//   res.status(200).sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
// })
// .get('/signup', (req, res) => {
//   // res.redirect('/play');
//   res.status(200).sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
// })
// .post('/signup', 
//   triviaController.createUser,
//   (req, res) => {
//   // res.redirect('/play');
//     res.status(200).sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
//   });


module.exports = router;

// app.route('/signup')
//   .get((req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/dist/index.html')))
//   .post(triviaController.createUser, (req, res) => {
//     res.send('Hi');
//   });