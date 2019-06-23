var express = require('express');
var burger = require('../models/burger');

var router = express.Router();

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.burger_name,
        results => {
            res.json(results);
        });
});

router.put("/api/burgers", (req, res) => {
    burger.update(req.body, results => {
        res.json(results);
    });
});

router.delete("/api/burgers", (req, res) => {
    burger.deleteAll(results => {
        res.json(results);
    });
});

router.get("/", (req, res) => {
    burger.all(results => {
        res.render("index", { burgers: results });
    });
});

router.all("*", (req, res) => {
    res.redirect("/");
});

module.exports = router;