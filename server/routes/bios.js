var express = require('express');
var router = express.Router();

var brian = {
  name: 'Brian Matney',
  biography: "Brian's bio",
  imgURL: "http://www.fillmurray.com/200/300"
}
var alex = {
  name: 'Alex Hermundson',
  biography: "Alex is a Wisconsin native who currently resides in South Minneapolis. He is also the father of 16 month old twins.",
  imgURL: "http://www.fillmurray.com/200/300"
}
var steve = {
  name: 'Steve Larsen',
  biography: "Steve's bio",
  imgURL: "http://www.fillmurray.com/200/300"
}

var bios = [brian, alex, steve]
console.log(bios);

router.get('/', function(req, res){
  console.log("requesting bios");
  res.send(bios);
});


module.exports = router;
