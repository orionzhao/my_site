/*
 * Module dependencies
 */

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

/*var engines = require('consolidate');
app.engine('html', engines.swig); */

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  	{title : 'A hungry fool'}
  	)
})

app.get('/recent', function (req, res) {
  res.render('recent',
    {title : 'Foolish Things'}
    )
})

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Listening on ' + port)
})