var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

function daysInMonth(month) {
  var year = (new Date()).getFullYear();
  return new Date(year, month, 0).getDate();
}

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var grid = {};
for (var i = 0; i < months.length; i++) {
  grid[months[i]] = daysInMonth(i+1);
}

var moodOptions = {
  5: 'happy/calm',
  4: 'energetic/excited',
  3: 'angry/annoyed',
  2: 'tired',
  1: 'anxious',
  0: 'sad/depressed'
};

app.get("/", function (req, res) {
  res.render('index', { grid: grid, moodOptions: moodOptions } );
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
