//routes
// home
exports.home = function(req,res){
  // res.send('this is the server response on the home page');
  res.render('home',{
    title: 'Worlcup page'
  });
};

//worldcup_single
exports.worldcup_single = function(req, res){
  var worldcup_number = req.params.worldcup_year;
  res.send("this is the page for worlcup " + worldcup_number);
};

//not found page
exports.not_found = function(req, res){
  res.send('page not found');
};
