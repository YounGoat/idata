'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
	/* in-package */
	, tld = require('../tld')
	, tld2 = require('../tld2')
    ;

describe('Top Level Domains', () => {
	it('count', () => {
		assert.equal(tld.length, 1577);
	});

	it('find .cn', () => {
		assert.equal('country-code', tld.find(element => element.domain == '.cn').type);
	});

	it('tld2()', () => {
		assert.equal(tld2().length, tld.length);
		assert(tld2().find(element => element == '.cn'));
	});

	it('tld2(type)', () => {
		assert.equal(tld2('cc').length, 312);
	});

	it('tld2(), type alias', () => {
		assert.deepEqual(tld2('cc'), tld2('ccTLD'));
	});
	
});