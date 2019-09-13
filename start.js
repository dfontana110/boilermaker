const { db, Movie } = require('./server/db/index');

const app = require('./server');

const port = process.env.PORT || 3000;

db.sync().then(function() {
  app.listen(port);
  console.log(`Listening on port ${port}`);
});

//
