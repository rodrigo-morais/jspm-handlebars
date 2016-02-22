'use strict'

exports.translate = function (file) {
	var handlebars = require('handlebars'),
			template = handlebars.compile(file.source);

	return template();
}