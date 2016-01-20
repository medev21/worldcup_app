var express = require('express');

var app = express();

//routes
// home
app.get('/', function(req,res){
  res.send('this is the server response on the home page');
});

//worldcup_single
app.get('/world_cup_single/:worldcup_number?', function(res, req){
  var worldcup_number = req.params.worldcup_number;
  res.send('this is the page for worlcup' + worldcup_number);
});

//not found page
app.get('*', function(req, res){
  res.send('page not found');
});

//display message in the terminal
app.listen(3000, function(){
  console.log('the server is running on localhost:3000');
});
