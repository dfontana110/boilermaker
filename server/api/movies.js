const router = require('express').Router();
const Movie = require('../db/movie');

router.get('/', async (req, res, next) => {
  try {
    res.json(await Movie.findAll());
  } catch (err) {
    next(err);
  }
});

router.get('/:movieId', async (req, res, next) => {
  try {
    res.json(await Movie.findByPk(req.params.movieId));
  } catch (err) {
    next(err);
  }
});

router.post('/', (req, res, next) => {});

router.put('/:movieId', (req, res, next) => {});

router.delete('/:movieId', (req, res, next) => {});

module.exports = router;
