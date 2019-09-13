const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

// logging middleware
app.use(morgan('dev'));

// static middlware
app.use(express.static(path.join(__dirname, '../public')));

// parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api routes
app.use('/api', require('./api'));

// send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// starting up server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

module.exports = app;
