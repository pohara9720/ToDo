var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var toDo = require("../models/todo.js");


router.get("/", function(req, res) {
    console.log('before sel')
    toDo.selectAll(function(data) {
        var hbsObject = {
            toDo: data
        };
        console.log('hbsObject = ', hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log('made it ', req.body);
    toDo.insertOne(req.body, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.body.id;
    console.log(req);
    console.log(res);
    console.log("condition", condition);

    toDo.updateOne({
        item: req.body.item,
        completed: req.body.completed,
        date: req.body.date
    }, condition, function() {
        res.redirect("/");
    });
});



module.exports = router;