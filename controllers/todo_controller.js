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
    toDo.insertOne([
        req.body.table ,req.body.item, req.body.completed, req.body.date
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.body.id;

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