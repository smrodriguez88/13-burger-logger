let express = require("express")
let burger = require("../models/burger.js")
let router = express.Router()

router.get("/", function(req, res) {
    res.redirect("/burgers")
  })

// Gets all burgers in DB
router.get("/burgers" , function (req, res) {
  burger.selectAll(function (data) {
      res.render("index", {burger_data: data});
  })
})

// Post a new buger to the DB
router.post("/burgers", function (req, res) {
  burger.insertOne(req.body.burger_name, function(data) {
    res.redirect("/burgers")
  })
})

// Update one burger via ID in DB
router.put("/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
      if (result.changedRows == 0) {
        return res.status (500).end()
      } else {
        res.status(200).end()
      }
  })
})

module.exports = router;
