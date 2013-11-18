/*
 * Module dependencies
 */

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , swig = require('swig');


var app = express()

/*
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}*/

var engines = require('consolidate');
app.engine('html', engines.swig);

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.set('views', __dirname + '/views')
app.set('view engine', 'html')
app.use(express.logger('dev'))

/*
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
*/

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/recent', function (req, res) {
  res.render('recent')
})

app.get('/a-stack-a-day-keeps-the-bug-away', function (req, res) {
  res.render('a-stack-a-day-keeps-the-bug-away')
})

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Listening on ' + port)
})