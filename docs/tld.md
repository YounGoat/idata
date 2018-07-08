#   Top Level Domain Names

> A top-level domain (TLD) is one of the domains at the highest level in the hierarchical Domain Name System of the Internet.

Primary TLD data are offered via `idata/tld`, while `idata/tld2` will directly return and array of typed top-level domains.

```javascript
// Obtain all TLDs with basic information (e.g. domain, type and manager).
const tld = require('idata/tld');
tld.find(element => element.domain == '.com');

// Obtain typed TLDs in domain.
const tld2 = require('idata/tld2');
// [ ..., '.cn', ... '.com', ... ]

```

Primitive data are downloaded from iana, [Root Zone Database](https://www.iana.org/domains/root/db).

##  Data Format

`idata/tld` is a JSON.

```javascript
// JSON Array.
[
    // Each item is made up by 3 properties:
    { 
        /* string */ domain,
        /* ENUM */ type,
        /* string */ manager,
    },
    // ...
]
```

*   string *domain*   
    Top-level domain in lowercase, prefixed with a dot signal.  
    ATTENTION: Some domains are __NOT__ made up of __latin-1__ characters (e.g. `.组织机构`).

*   ENUM *type*  
    A singal word or hyphen-connected in lower-case, representing the domain's type.   
    Which may be one of the following:
    *   __country-code__
    *   __generic__
    *   __generic-restricted__
    *   __infrastructure__
    *   __sponsored__
    *   __test__
    
    See section [Types](#types) for details.

*   string *manager* 

## Types

Types available for `tld2()` include:

*   __ARPA__ | __infrastructure__  
    The only one belonging to this type is `.apra` .
*   __ccTLD__ | __country-code__ | __cc__ 
*   __gTLD__ | __generic__ | __g__  
*   __grTLD__ | __generic-restricted__ | __gr__
*   __sTLD__ | __sponsored__ | __s__ 
*   __tTLD__ | __test__ | __t__


##  References

*   iana, [Root Zone Database](https://www.iana.org/domains/root/db)
*   WIKIPEDIA, [Top-level domain](https://en.wikipedia.org/wiki/Top-level_domain)