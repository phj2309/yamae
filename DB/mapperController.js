
const userMapper = require('./Mapper/User');
const adminMapper = require('./Mapper/Admin');
const planMapper = require('./Mapper/plan');
const mapMapper = require('./Mapper/Map');

module.exports = function() {
	return {
		user: userMapper,
		admin: adminMapper,
		plan: planMapper,
		map: mapMapper

	}
}();
