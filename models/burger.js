// Importing the ORM
let orm = require("../config/orm.js");

// Creating variable with calls for selectAll, insertOne, and updateOne
let burger = {
  selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
          cb(res);
      })
  },
  insertOne: function(burger, cb) {
      orm.insertOne("burgers", burger, function(res) {
          cb(res);
      })
  },
  updateOne: function(id, cb) {
      orm.updateOne("burgers", id, function(res) {
          cb(res);
      })
  }
}

module.exports = burger;
