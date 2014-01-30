trawler
=======

Express middleware to troll bots. A combination of "trolling" and "crawler", also a boat for catching a lot of fish. Gotta catch 'em all.


Why?
====

Because the access logs of my **node** app kinda looks like this

> 404 - /phpMyAdmin/scripts/setup.php

> 404 - /myadmin/scripts/setup.php

> 404 - /pma/scripts/setup.php

> 404 - /administrator/index.php

> 404 - /wp-login.php

You get the point. And I bet I'm not the only one seeing these. And instead of getting all the "false" 404, why not redirect the bots to a fun location and get rid of them? This will clean our logs and teach them that they should get a hobby instead of hacking wordpress installation.


Installation
============

Just do `npm install trawler` and include the middleware like this.

```js
var trawler = require('trawler');

//...all the other middleware...

app.use(trawler());

app.use(/* put your 404 middleware here, to catch and log actual 404 errors. */);
```

By default trawler will `301` redirect all requests that match the filters to `http://www.youtube.com/watch?v=oHg5SJYRHA0`. You can pass an alternative url as optional parameter, like `trawler('http://www.nsa.gov/')`.


Filters
=======

So far trawler only checks if the path ends with `.php`. If you find other regularily crawled urls that are suspicious, feel free to create a pull request.