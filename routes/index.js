var express   = require('express');
var router    = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('./public/index.html');
  // res.render('index', { title: 'Express' });
});

router.get('/handleuth', function(req, res) {
  console.log("Authorization Instagram");
})

module.exports = router;
