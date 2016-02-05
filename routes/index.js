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

  // console.log(worldcups[1].year);

  // var worldcups_arr = ["1970", "1974", "1978"]

  for(var i = 0; i < worldcups.length; i++){
    if(worldcups[i].year == worldcup_number){
      var worldcup = worldcups[i];
      var title = worldcups[i].title;
      var year = worldcups[i].year;
    }
  }

  if(year == worldcup_number){
    res.render('worldcup_single.ejs',{
      worldcups: worldcups,
      title: title,
      worldcup: worldcup
    });
  }else{
    // res.send("this is not the page you are looking!");
    res.render('notFound.ejs',{
      worldcups: worldcups,
      title: "This not the page you are looking for!"
    });

  }

};

//not found page
exports.notFound = function(req, res){
  var worldcups = worldcupsJson.worldcups;
  res.render('notFound.ejs',{
    worldcups: worldcups,
    title: "This not the page you are looking for!"
  });
};
