module.exports = function () {
	var cl = console.log;
	console.log = function () {
		var a = Array.prototype.slice.call(arguments);
		var namespace = process.env.NAME || 'node.js process';

		a.unshift(namespace + ':\n');
		cl.apply(this, a);
	};

	return console.log;
};
