var express = require('express');

var app = express();

app.set('view engine', 'ejs');
//routes
// home
app.get('/', function(req,res){
  // res.send('this is the server response on the home page');
  res.render('home',{
    title: 'Worlcup page',
    tournaments: ["the first cup", "the second cup", "the third cup"]
  });
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
