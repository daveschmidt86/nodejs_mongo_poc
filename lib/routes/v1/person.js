let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.send("you're at the person router");
});

router.get('/:name', (req, res) => {
  res.send(`you requested ${req.params.name}`);
});

module.exports = router;
