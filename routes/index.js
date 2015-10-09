/*
 * GET home page.
 */

var request = require('request');
var fs = require('fs');
var url = require('url');

var filename = 'file';

exports.index = function(req, res){
  var urlStr = req.param('url');

  if (urlStr == undefined || !urlStr) {
    res.render('index', { title: 'Express' });
    return;
  }

  var urlObj = url.parse(urlStr);
  
  request(urlObj.href)
  .on('end', function () {
    res.download(filename);
  })
  .pipe(fs.createWriteStream(filename));
};
