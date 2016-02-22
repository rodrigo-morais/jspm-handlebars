'use strict'

import handlebars from 'handlebars';

export function translate(source) {
	var template = handlebars.compile(require(source + "!text"));
	return template();
}