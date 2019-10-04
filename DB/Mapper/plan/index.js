const sql = require('../../sql.js');

module.exports = {

    createPlan: function(_userId, _title, _startDate, _finishDate, _country) {
        return new Promise(function(resolve, reject) {
			var insertQuery = 'INSERT INTO plan (user_id, title, startDate, finishDate, country) VALUES (?, ?, ?, ?, ?)';

			sql.excuteParam(insertQuery, [_userId, _title, _startDate, _finishDate, _country]).then(function(rows) {
				resolve(rows);
			}).catch(function(error) {
				reject(error);
			});
		});
	},
	insertGroup: function(_planId,_nickname) {
        return new Promise(function(resolve, reject) {
			var insertQuery = 'INSERT INTO tripontrip_db.group (plan_id, nickname) VALUES (?, ?)';

			sql.excuteParam(insertQuery, [_planId, _nickname]).then(function(rows) {
				resolve(true);
			}).catch(function(error) {
				reject(error);
			});
		});
	},
	createDetailPlan: function(_planId, _days, _content, _startTime, _finishTime) {
        return new Promise(function(resolve, reject) {
			var insertQuery = 'INSERT INTO tripontrip_db.days_detail (plan_id, days, content, startTime, finishTime) VALUES (?, ?, ?, ?, ?)';

			sql.excuteParam(insertQuery, [_planId, _days, _content, _startTime, _finishTime]).then(function(rows) {
				resolve(rows);
			}).catch(function(error) {
				reject(error);
			});
		});
	},
	searchPlanByTitle: function(_Keyword) {
		return new Promise(function(resolve, reject) {
			var selectQuery = 'SELECT * FROM plan WHERE title LIKE "%?%"';

			sql.excuteParam(selectQuery, [_Keyword]).then(function(rows) {
				if(rows.length == 0)
					resolve(null);

				resolve(rows);
			}).catch(function(error) {
				reject(error);
			});
		});
	},
	searchPlanByPlace: function(_Keyword) {
		return new Promise(function(resolve, reject) {
			var selectQuery = 'SELECT * FROM place WHERE address LIKE "%?%"';

			sql.excuteParam(selectQuery, [_Keyword]).then(function(rows) {
				if(rows.length == 0)
					resolve(null);

				resolve(rows);
			}).catch(function(error) {
				reject(error);
			});
		});
	}
	

}
