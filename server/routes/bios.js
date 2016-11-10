var express = require('express');
var router = express.Router();


var brian = {
    name: 'Brian Matney',
    firstName: "brian",
    biography: "Hailing from Gravette, Ar, Brian is a passionate saxophone player and recent resident of Minnesota. ",
    imgURL: "../assets/images/brian.png",
    likeCount: 0
}
var alex = {
    name: 'Alex Hermundson',
    firstName: "alex",
    biography: "Alex is a Wisconsin native who currently resides in South Minneapolis. He is also the father of 16 month old twins.",
    imgURL: "../assets/images/alex.png",
    likeCount: 0
}
var steve = {
    name: 'Steve Larsen',
    firstName: "steve",
    biography: "Born and raised in Sheboygan, WI, Steve makes his home in Minnesota. He loves travel, film, cooking, and his family.",
    imgURL: "../assets/images/steve.jpg",
    likeCount: 0
}

var bios = [brian, alex, steve]
console.log(bios);

router.get('/', function(req, res) {
    console.log("requesting bios");
    res.send(bios);
});

router.post('/brian', function(req, res) {
    console.log("incrementing brian likes");
    brian.likeCount++;
    console.log(brian.likeCount);
    res.sendStatus(201);
})

router.post('/alex', function(req, res) {
    console.log("incrementing alex likes");
    alex.likeCount++;
    console.log(alex.likeCount);
    res.sendStatus(201);
})

router.post('/steve', function(req, res) {
    console.log("incrementing steve likes");
    steve.likeCount++;
    console.log(steve.likeCount);
    res.sendStatus(201);
})

module.exports = router;
