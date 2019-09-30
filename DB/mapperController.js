
const userMapper = require('./Mapper/User');
const adminMapper = require('./Mapper/Admin');
const planMapper = require('./Mapper/plan');

module.exports = function() {
	return {
		user: userMapper,
		admin: adminMapper,
		plan: planMapper

	}
}();
