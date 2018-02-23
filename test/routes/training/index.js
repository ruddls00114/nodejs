const express = require('express');
const router = express.Router();
const first = require('./first')

router.use('/first',first)

module.exports = router;
