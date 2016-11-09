var express = require('express');
var router = express.Router();

var brian = {
  name: 'Brian Matney',
  biography: "Brian's bio",
  imgURL: "http://www.fillmurray.com/400/400"
}
var alex = {
  name: 'Alex Hermundson',
  biography: "Alex's bio",
  imgURL: "http://www.fillmurray.com/400/400"
}
var steve = {
  name: 'Steve Larsen',
  biography: "Steve's bio",
  imgURL: "http://www.fillmurray.com/400/400"
}

var bios = [brian, alex, steve]
console.log(bios);

router.get('/', function(req, res){
  console.log("requesting bios");
  res.send(bios);
});


module.exports = router;
