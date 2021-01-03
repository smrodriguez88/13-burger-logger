// Use the configuration Sql server configuration from connection.js
let conn = require("./connection.js");

let orm = {
  // selects all burgers from the DB
  selectAll: function(table, cb) {
      let sqlQuery = "SELECT * FROM ?";
      connection.query(sqlQuery, table, function(err, result) {
        if (err) throw err;
          cb(result);
      })
    },
  // inserts a new burger into the DB
  insertOne: function(burger, cb) {
      let sqlQuery = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)";
      connection.query(sqlQuery, burger, function(err, result) {
        if (err) throw err;
          cb(result);
      })
    },
  // updates the devoured status of a burger in the DB
  updateOne: function(id, cb) {
      let sqlQuery = "UPDATE burgers SET devoured = NOT devoured WHERE id = ?";
      connection.query(sqlQuery, id, function(err, result) {
        if (err) throw err;
          cb(result);
      })
    }
  }

  module.exports = orm;
