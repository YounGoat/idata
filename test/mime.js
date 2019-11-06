'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
	/* in-package */
	, mime = require('../mime')
	, mimeUtil = require('../mime-util')
    ;

describe('MIME', () => {
	it('db', () => {
		assert.equal(Object.keys(mime).length, 2066);
	});
	
	it('getType(extension)', () => {
		assert.equal(mimeUtil.getType('.html'), 'text/html');
		assert.equal(mimeUtil.getType('foo/bar.html'), 'text/html');
	});

	it('getExtension(mimeType)', () => {
		assert.equal(mimeUtil.getExtension('text/html'), 'html');
	});
});