var express   = require('express');
var router    = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('Root URL')
  res.render('index', { title: 'Express' });
});

router.get('/handleuth', function(req, res) {
  console.log("Authorization Instagram");
})

module.exports = router;
