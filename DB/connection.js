const dbConfig = require('./config.js');
const mysql = require('mysql');

let pool;

module.exports = {
	init: function() {
		pool = mysql.createPool(dbConfig);

		console.log('Mysql Initialize...');
	},

	getConnection: function(callback) {
		pool.getConnection(callback);
	},

	end: function(callback) {
		pool.end(callback);
	}
};
