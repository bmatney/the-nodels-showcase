var express = require('express');
var router = express.Router();

var brian = {
  name: 'Brian Matney',
  biography: "Brian's bio",
  imgURL: "../public/assets/images/pic1.jpg"
}
var alex = {
  name: 'Alex Hermundson',
  biography: "Alex's bio",
  imgURL: "../public/assets/images/pic2.jpg"
}
var steve = {
  name: 'Steve Larsen',
  biography: "Steve's bio",
  imgURL: "../public/assets/images/pic3.jpg"
}

var bios = [brian, alex, steve]
console.log(bios);

router.get('/', function(req, res){
  console.log("requesting bios");
  res.send(bios);
});


module.exports = router;
