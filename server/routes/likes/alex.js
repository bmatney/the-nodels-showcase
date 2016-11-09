var express = require('express');
var router = express.Router();

var likeCount = {
  name: "Alex",
  likes: 0
}

router.get('/', function(req, res){
  console.log("get like count for Alex");
  res.send(likeCount);
});

router.post('/', function(req, res){
  likeCount.likes++;
  res.sendStatus(201);
});

module.exports = router;
