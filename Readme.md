# Node Namespaced Logs

A simple wrapper for console.log to add a namespace to your logs. Useful when running multiple processes out of the same master process, all of which may log to the console.

## Use

Add the following to your package.json dependencies:
```javascript
"nodeNamespacedLogs": "git://github.com/jacopotarantino/nodeNamespacedLogs.git",
```

Then in your application:
```javascript
var log = require( 'nodeNamespacedLogs' )();
```

It automatically wraps console.log and returns a copy of the wrapped function in case you want to rename it.

## License

Do whatever you wish with this code. I would ask that you please link back to it or credit me if you use it and especially if you publish it.

## Author

Written by Jacopo Tarantino. [@jacopotarantino](http://twitter.com/jacopotarantino) on twitter. [http://jacopotarantino.com](http://jacopotarantino.com)
