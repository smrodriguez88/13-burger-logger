// Use the configuration Sql server configuration from connection.js
let conn = require("./connection.js");

let orm = {
  // selects all burgers from the DB
  selectAll: function(table, cb) {
      console.log(`Calling all burgers from database`)
      let sqlQuery = `SELECT * FROM ${table}`;
      conn.query(sqlQuery, table, function(err, result) {
        if (err) throw err;
          cb(result);
      })
    },
  // inserts a new burger into the DB
  insertOne: function(table, burger, cb) {
      console.log(`Adding ${burger} to the burger list`)
      let sqlQuery = `INSERT INTO ${table} (burger_name, devoured) VALUES (?, FALSE)`;
      conn.query(sqlQuery, burger, function(err, result) {
        if (err) throw err;
          cb(result);
      })
    },
  // updates the devoured status of a burger in the DB
  updateOne: function(table, id, cb) {
      console.log(`Updaing devoured status of burger id ${id}`)
      let sqlQuery = `UPDATE ${table} SET devoured = NOT devoured WHERE id = ?`;
      conn.query(sqlQuery, id, function(err, result) {
        if (err) throw err;
          cb(result);
      })
    }
  }

  module.exports = orm;
