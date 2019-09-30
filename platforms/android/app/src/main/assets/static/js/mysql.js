var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mydbinstance.cbpobdvvdwvz.ap-northeast-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'test1234',
  database : 'tripontrip_db'
});
 
connection.connect();
 
connection.query('show databases', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();