var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
   fetch('https://vejr.eu/api.php/?location=Copenhagen&degree=C')
   .then(res => res.json())
   .then(data => {
      res.send({ data });
   })
   .catch(err => {
      res.redirect('/error');
   })
  });


module.exports = router;
