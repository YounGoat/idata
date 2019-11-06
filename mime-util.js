'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , mimeDb = require('mime-db')
    
    /* in-package */
    ;

/**
 * Find MIME type for special extname.
 * @param {string} extension 
 */
function getType(extension) {
    extension = extension.slice(extension.lastIndexOf('.') + 1).toLowerCase();
    let matchedType = null;
    for (let mimeType in mimeDb) {
        let extensions = mimeDb[mimeType].extensions;
        if (extensions && extensions.includes(extension)) {
            matchedType = mimeType;
            break;
        }
    }
    return matchedType;
}

/**
 * Find extname for special MIME type.
 */
function getExtension(mimeType) {
    let info = mimeDb[mimeType];
    return info && info.extensions ? info.extensions[0] : null;
}

module.exports = {
    getType,
    getExtension,
};