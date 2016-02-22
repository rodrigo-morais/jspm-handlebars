'use strict'

import handlebars = require('handlebars');

export function translate(source) {
	var template = handlebars.compile(require(source + "!text"));
	return template();
}