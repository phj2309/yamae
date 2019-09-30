const pool = require('./connection.js');

module.exports = {
	excute: function(sql) {
		return new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con) {
				con.query(sql, function(err, rows) {
					con.release();

					if(err)
						reject(err);

					resolve(rows);
				});
			});
		});
	},

	/**
	* @param {string} sql SELECt * FROM user where id = ?
	* @param {array} params ['bg0820', 'bg0820@naver.com', '22'];
	*/
	excuteParam: function(sql, params) {
		return new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con) {
				con.query(sql, params, function(err, rows) {
					con.release();

					if(err)
						reject(err);

					resolve(rows);
				});
			});
		});
	},


};
