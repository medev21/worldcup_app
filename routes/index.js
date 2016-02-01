var worldcupsJson = require('../worlcups.json');

//routes
// home
exports.home = function(req,res){
  // res.send('this is the server response on the home page');

  var worldcups = worldcupsJson.worldcups;
  res.render('home',{
    title: 'FIFA Worldcups',
    worldcups: worldcups
  });
};

//worldcup_single
exports.worldcup_single = function(req, res){
  var worldcups = worldcupsJson.worldcups;

  var worldcup_number = req.params.worldcup_year;

  // var worlcups_arr = [1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970,
  //                     1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006,
  //                     2010, 2014
  // ]

  var worlcups_arr = [1970, 1974, 1978]

  for(var i = 0; i < worlcups_arr.length; i++){
    if(worlcups_arr[i] == worldcup_number){
      var worldcup = worldcups[i];
      var title = worldcup.title;

      res.render('worldcup_single.ejs',{
        worldcups: worldcups,
        title: title,
        worldcup: worldcup
      });
      break;
    }else{
      res.send("this is not the page you are looking!");
      break;
    }
  }

};

//not found page
exports.not_found = function(req, res){
  res.send('page not found');
};
