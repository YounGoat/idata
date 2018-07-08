'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
	/* in-package */
	, alpha2 = require('../iso-3166-1-alpha-2')
    ;

describe('ISO-3166-1 Alpha-2', () => {
	it('count', () => {
		assert.equal(alpha2.length, 249);
	});

	it('find CN', () => {
		assert.equal('China', alpha2.find(element => element.code == 'CN').name);
	});
});