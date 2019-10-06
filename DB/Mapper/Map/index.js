const sql = require('../../sql.js');

module.exports = {

    insertPlace: function(_days_detail_id, _address, _keyword, _latitude, _longitude) {
        return new Promise(function(resolve, reject) {
			var insertQuery = 'INSERT INTO place (days_detail_id, address, keyword, latitude, longitude) VALUES (?, ?, ?, ?, ?)';

			sql.excuteParam(insertQuery, [_days_detail_id, _address, _keyword, _latitude, _longitude]).then(function(rows) {
				resolve(true);
			}).catch(function(error) {
				reject(error);
			});
		});
	}
	

}
