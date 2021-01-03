// include express
var express = require("express")

// set variables
var app = express()
var PORT = process.env.PORT || 3000
var exphbs = require("express-handlebars")
var routes = require("./controllers/burgers_controller.js")

// express configuration including static directory, and use of handlebars
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


app.listen(PORT, function() {
  console.log(`Server started and is listening on port ${PORT}`)
});
