'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	, tld = require('./tld');
	;

const TYPES = {
	'infrastructure'     : [ 'ARPA' ], 
	'country-code'       : [ 'ccTLD', 'country-code', 'cc' ],
	'generic'            : [ 'gTLD', 'g' ],
	'generic-restricted' : [ 'grTLD', 'gr' ],
	'sponsored'          : [ 'sTLD', 's' ],
	'test'               : [ 'tTLD', 't' ],
};

const REG = {};

function TLD(type) {
	// ---------------------------
	// Uniform the type name.
	if (arguments.length == 0) {
		type = '.';
	}
	else if (!type) {
		throw new Error(`type should be a not-empty string`);
	}
	else {
		type = type.toLowerCase();
		let found = TYPES[type];
		if (!found) {
			for (let name in TYPES) {
				found = TYPES[name].find(alias => alias.toLowerCase() == type);
				if (found) {
					type = name;
					break;
				}
			}
		}
		if (!found) {
			throw new Error(`invalid TLD type: ${type}`);
		}
	}

	// ---------------------------
	// Find in register.
	if (REG[type]) return REG[type];

	// ---------------------------
	// Load data, save in register and return.

	if (type == '.') {
		REG[type] = tld.map(element => element.domain);
	}
	else {
		REG[type] = tld.filter(element => element.type == type).map(element => element.domain);
	}

	return REG[type];
}

module.exports = TLD;