var express = require('express');
var router = express.Router();
const customer = require('../models').Customers;
const faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {

const building = faker.address.city();
const room = faker.address.city();
const temperature = faker.random.number({
    'min': 0,
    'max': 50
  });
const humidity = faker.random.number({
    'min': 0,
    'max': 100
  });
const c02 = faker.random.number({
    'min': 0,
    'max': 500
  });
const airquality = faker.random.number({
    'min': 0,
    'max': 5
  });
const lightlevel = faker.random.number({
    'min': 0,
    'max': 400
  });
const lightcolor = faker.random.number({
    'min': 0,
    'max': 5000
  });

const body = {
    building: building,
    room: room,
    temperature: temperature,
    humidity: humidity,
    c02: c02,
    airquality: airquality,
    lightlevel: lightlevel,
    lightcolor: lightcolor,
};


customer.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('Dummy data created');
});

module.exports = router;