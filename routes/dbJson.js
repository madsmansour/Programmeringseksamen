var express = require('express');
var router = express.Router();
const customer = require('../models').Customers;

/* GET home page. */
router.get('/', async function(req, res, next) {
    var result = await customer.findAll();
  res.json(result);
});

module.exports = router;