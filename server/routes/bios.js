var express = require('express');
var router = express.Router();

var brian = {
  name: 'Brian Matney',
  biography: "Brian's bio",
  imgURL: "../assets/images/brian.png"
}
var alex = {
  name: 'Alex Hermundson',
  biography: "Alex is a Wisconsin native who currently resides in South Minneapolis. He is also the father of 16 month old twins.",
  imgURL: "../assets/images/alex.png"
}
var steve = {
  name: 'Steve Larsen',
  biography: "Steve's bio",
  imgURL: "../assets/images/steve.jpg"
}

var bios = [brian, alex, steve]
console.log(bios);

router.get('/', function(req, res){
  console.log("requesting bios");
  res.send(bios);
});


module.exports = router;
