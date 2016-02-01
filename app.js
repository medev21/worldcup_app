var express = require('express'); //calls express module
var routes = require('./routes'); //calls the require folder
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//routes
// home
app.get('/', routes.home);

//worldcup_single
app.get('/world_cup_single/:worldcup_year?', routes.worldcup_single);

//not found page
app.get('*', routes.not_found);

//display message in the terminal
// app.listen(3000, function(){
//   console.log('the server is running on localhost:3000');
// });

app.listen(process.env.PORT || 3000);
