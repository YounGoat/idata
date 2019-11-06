#   MIME, Multi-purpose Internet Mail Extensions

MIME is now the actual standard of Internet media types.

Sub module `idata/mime` refers to 3rd-party module [`mime-db`][^npm.mime-db]  which maintains a collection of public MIME types. According to README of [`mime-db`][^npm.mime-db],

>  It consists of a single, public JSON file and does not include any logic, allowing it to remain as un-opinionated as possible with an API.

Another sub module `idata/mime-util` contains a collection of functions related with MIME.

```javascript
// Obtain an hash object containing popular public MIMES.
const mime = require('idata/mime');
mime['application/json'].source; 
// RETURN: "iana"

const mimeUtil = require('idata/mime-util');
mimeUtil.getType('.html');
// RETURN: "text/html"
```

##  Data Format

See NPM packge [mime-db][^npm.mime-db].

##  APIs

*   string __mimeUtil.getType__(string *extname*)
*   string __mimeUtil.getExtension__(string *mimetype*)

##  References

*   NPM, [mime-db][^npm.mime-db]
*   NPM, [mime][^npm.mime]
*   MDN, [Incomplete list of MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)
*   WIKIPEDIA, [MIME](https://en.wikipedia.org/wiki/MIME)

[^npm.mime]: https://www.npmjs.com/package/mime
[^npm.mime-db]: https://www.npmjs.com/package/mime-db