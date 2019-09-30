module.exports = (
	function() {
	  return {
	    host: "mydbinstance.cbpobdvvdwvz.ap-northeast-2.rds.amazonaws.com",
	    user: "admin",
	    password: "test1234",
			database: "tripontrip_db",
			waitForConnections: true,
			connectionLimit: 30,
			multipleStatements: true
	  }
  }
)();
