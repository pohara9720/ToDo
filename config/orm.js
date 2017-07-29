var mysql = require("mysql");
var connection = require("./connection.js");

var orm = {
    selectAll: function(what,table,cb) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [what,table], function(err, result) {
            cb(result);
        });

    },

    insertOne: function(table, item, completed, date, cb) {
        var queryString = "INSERT INTO ??(item,completed,date) VALUES (?,?,?)";
        connection.query(queryString, [table, item, completed, date], function(err, result) {
            cb(result);

        });
    },

    updateOne: function(table, column1, value1, column2,value2,cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, column1, value1, column2, value2], function(err, result) {
            cb(result);
        });

    }

}

module.exports = orm;

