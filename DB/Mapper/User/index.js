const sql = require('../../sql.js');

module.exports = {

	applyUser: function(_email, _name, _sex, _birthday) {
		return new Promise(function(resolve, reject) {
			var updateQuery = 'UPDATE User SET name = ?, sex = ?, birthday = ?, regTime = CURRENT_TIMESTAMP WHERE email = ?';

			sql.excuteParam(updateQuery, [_name, _sex, _birthday, _email]).then(function(rows) {
				resolve(true);
			}).catch(function(error) {
				reject(error);
			});
		});
	},

	getUserInfo: function(_regKey) {
		return new Promise(function(resolve, reject) {
			var selectQuery = 'SELECT * FROM User WHERE regKey = ?';

			sql.excuteParam(selectQuery, [_regKey]).then(function(rows) {
				if(rows.length == 0)
					resolve(null);

				resolve(rows);
			}).catch(function(error) {
				reject(error);
			});
		});
	},
}
