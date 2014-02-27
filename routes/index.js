var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var gridFlag = {'isGrid': false};
  	res.render('index', {'projects': projects, 'gridFlag': false});
};

exports.viewGrid = function(req, res) {
	var gridFlag = {'isGrid': true};
	res.render('index', {'projects': projects, 'gridFlag': true});
};