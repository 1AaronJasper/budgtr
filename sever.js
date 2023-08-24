const express = require("express");
const app = express();
const PORT = 4000;
const Budget = require("./models/budget.js")
const expressLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(express.static('public'));
app.use(expressLayouts)
app.use(express.urlencoded({ extended:false}));

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get("/index", (req, res) => {
    res.render("index.ejs");
})

app.listen(PORT, () => {console.log("this here is a port!")});
