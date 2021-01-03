// Use the MySQL package
var mysql = require("mysql");
var conn = null
// Create MySQL connection
if (process.env.JAWSDB_URL) {
  conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        conn = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "",
            database: "burgers_db"
});

// Connect
conn.connect(function(err) {
  if (err) {
    console.error(`Connection error due to ${err}`)
    return
  }
  
  console.log(`Connected to MySQL`)

})

module.exports = conn;
