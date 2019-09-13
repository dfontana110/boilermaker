const router = require('express').Router();

router.use('/heroes', require('./heroes'));
router.use('/teams', require('./teams'));

router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
