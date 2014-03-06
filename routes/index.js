
/*
 * GET home page.
 */
var dynasties = require('./chinabook.js').dynasties;
var prehistory = require('./chinabook.js').earlyTimes;
var lit = require('./chinabook.js').lit;

exports.index = function(req, res){
  res.render('index');
};

exports.premodern = function(req, res){
	req.session.section = 'premodern';
	req.session.subsection = false;
	res.render('partone', {
		prehistory: prehistory,
		dynasties: dynasties
	})
};

exports.main = function(req, res) {
	var location;
	if(req.session.section === 'premodern') {
		location = dynasties;
	} else {
		location = modern;
	};
	req.session.subsection = req.params.cat;
	data = location[req.params.cat]
	res.render('main', {
		data: data
	});
};

exports.section = function(req, res) {
	var location;
	if(req.session.section === 'premodern') {
		location = dynasties;
	} else {
		location = modern;
	};
	var data = location[req.session.subsection][req.params.cat];
	res.render('main', {
		data: data
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