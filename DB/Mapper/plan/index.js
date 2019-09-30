const sql = require('../../sql.js');

module.exports = {

    createPlan: function(_userId, _title, _startDate, _finishDate, _country) {
        return new Promise(function(resolve, reject) {
			var insertQuery = 'INSERT INTO plan (user_id, title, startDate, finishDate, country) VALUES (?, ?, ?, ?, ?)';

			sql.excuteParam(insertQuery, [_userId, _title, _startDate, _finishDate, _country]).then(function(rows) {
				resolve(true);
			}).catch(function(error) {
				reject(error);
			});
		});
    }

}
