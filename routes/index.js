
/*
 * GET home page.
 */
var premodern = require('./chinabook.js').premodern;
var lit = require('./chinabook.js').lit;

exports.index = function(req, res){
	console.log(req.connection.remoteAddress);
  res.render('index');
};

exports.premodern = function(req, res){
	req.session.division = 'premodern';
	req.session.section = false;
	res.render('partone')
};

exports.main = function(req, res) {
	var parts = req.params.cat.split('+');
  data = chain(parts);
	res.render('main', {
		data: data
	});
};

exports.section = function(req, res) {
	var data = premodern[req.session.section][req.params.cat];
	res.render('main', {
		data: data
	})
}

exports.calltext = function(req, res) {
	var content = req.params.text.split('+');
	var source = content[0];
	var text = content[1];
	var data = lit[source];
	res.render('text', {
		data: data,
		key: text
	})
}

exports.modern = function(req, res) {
	req.session.section = 'modern';
	res.render('parttwo', {
		lit: lit
	})
};

exports.literature = function(req, res) {

}

var chain = function(terms) {
  var parts = terms;
if(parts.length === 1) {
    return premodern[parts[0]];
  } else if (parts.length === 2) {
    return premodern[parts[0]][parts[1]];
  } else if (parts.length === 3) {
    return premodern[parts[0]][parts[1]][parts[2]];
  } else if (parts.length === 4) {
    return premodern[parts[0]][parts[1]][parts[2]][parts[3]]
  };
};