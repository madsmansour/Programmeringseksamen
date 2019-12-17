var express = require('express');
var router = express.Router();
const customer = require('../models').Customers;

/* post new customer. */
router.post('/customer', function(req, res, next) {
  console.log(req['body'])
  customer.create(req['body'])
  res.send("Data indsat");
});

/* update existing customer. */
router.put('/customer/:id', function(req, res, next) {
  customer.update(
    req.body,
    {where:{id:req.params.id}});
  res.send("Data ændret");
});

/* delete customer. */
router.delete('/customer/:id', function(req, res, next) {
  customer.destroy(
    {returning:true, where:{id:req.params.id}});
  res.send("Data slettet");
});

/* GET all customerdata. */
router.get('/customer', async function(req, res, next) {
  var result = await customer.findAll();
res.json(result);
});

/* GET customer by ID. */
router.get('/customer/:id', async function(req, res, next) {
  var result = await customer.findByPk(req.params.id);
res.json(result);
});

module.exports = router;