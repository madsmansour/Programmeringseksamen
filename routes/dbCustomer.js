var express = require('express');
var router = express.Router();
const customer = require('../models').Customers;

/* GET home page. */
router.get('/', async function(req, res, next) {
    

    // koble på db
    // sende en query
    // modtage et objekt
    // vise objektet i templaten
    res.render("db", {
        title: "db",
        customers: await customer.findAll()
    });
});

module.exports = router;