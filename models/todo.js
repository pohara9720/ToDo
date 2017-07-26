

var orm = require("../config/orm.js");


var todo = {
  selectAll: function(cb) {
    orm.selectAll("*", "todo", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(table,val1, val2, val3,cb) {
    orm.insertOne("todo", "keep it 100", false,"2013-08-05 18:19:03", function(res) {
      cb(res);
    });
  },
  updateOne: function(table, column1, value1, column2,value2,cb) {
    orm.updateOne("todo", "item", "asdasdas", "item","12312312", function(res) {
      cb(res);
    });
  }
};

// orm.selectAll("*","todo");

// orm.insertOne("todo","Stay Mad True",false,'2013-08-05 18:19:03');

// orm.updateOne("todo", "item", "Turn up", "item","Go to Work");

module.exports = todo;

