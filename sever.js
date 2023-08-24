const express = require("express");
const app = express();
const PORT = 4000;
const budget = require("./models/budget.js")
const expressLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(express.static('public'));
app.use(expressLayouts)
app.use(express.urlencoded({ extended:true}));


//index
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/budgets", (req, res) => {
    res.render("index", { budget: budget })
});

//New

app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
  });
  

// Create
app.post("/budgets", (req, res) => {
   
    const newBudget = {
        date: req.body.date,
        from: req.body.from,
        amount: req.body.amount,
        tags: req.body.tags,
    };

    res.redirect("/budgets");
});
// Show
app.get('/budgets/:id', (req, res) => {
    res.render('show.ejs', {
       budget: budget[req.params.id]
    });
});

app.post('/submit', (req, res) => {
    const formData = req.body; // Access form data here
    // Process the form data as needed
    res.send(`Received form data: ${JSON.stringify(formData)}`);
});




app.listen(PORT, () => {console.log("this here is a port!")});
