const sql = require('../../sql.js');

module.exports = {

    insertPlace: function(_userId, _title, _startDate, _finishDate, _country) {
        return new Promise(function(resolve, reject) {
			var insertQuery = 'INSERT INTO place (days_detail_id, location, address) VALUES (?, ?, ?)';

			sql.excuteParam(insertQuery, [_userId, _title, _startDate, _finishDate, _country]).then(function(rows) {
				resolve(rows);
			}).catch(function(error) {
				reject(error);
			});
		});
	}
	

}
