#   ISO-3166-1 Alpha-2

ATTENTION: Only __official assigned__ codes are included here. 

```javascript
const alpha2 = require('idata/iso-3166-1-alpha-2');
alpha2.find(element => element.code == 'CN');
// { code: 'CN', year: 1974, name: 'China' }
```

##  Data Format

```javascript
// JSON Array.
[
    // Each item is made up by 3 properties:
    { 
        code,
        name,
        year,
    },
    // ...
]
```

*   __code__  
    >  ISO 3166-1 alpha-2 code

*   __name__  
    Name of country and regions.
    > English short country name officially used by the ISO 3166 Maintenance Agency (ISO 3166/MA)

*   __year__  
    > Year when alpha-2 code was first officially assigned (1974, first edition of ISO 3166)


##  References

*   WIKIPEDIA, [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
*   WIKIPEDIA, [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)