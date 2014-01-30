var filters = {
	phpFiles: /\.php$/
};

module.exports = function(target) {
	target = target || 'http://www.youtube.com/watch?v=oHg5SJYRHA0';

	return function(req, res, next) {
		var key;
		var filter;
		var path = req.path;

		for(key in filters) {
			filter = filters[key];

			if(filter.test(path)) {
				return res.redirect(301, target);
			}
		}

		next();
	};
};