const express = require("express");
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, "./public")));
 
app.set("view engine", "ejs");

const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];
 
app.get("/", (req, res) => {
    //loads of code in here
    let username = "Sophie";
    res.render("landing", {data : username, stock: inventory});
});
 
app.get("/playlist", (req, res) => {
    res.send("my playlist");
});
 
app.get("/playlist/:playId", (req, res) => {
    let id = req.params.playId;
    // poor pract ice but ok for testing as developer
    res.send(`SELECT * FROM playlists WHERE ID = ${id}`);
});

app.get("/products", (req, res) => {
    let queryp = req.query.q;
    res.send(`SELECT * FROM products WHERE name LIKE ${queryp}`);
});

// listener created using callback function
app.listen(3000, (err) => {
    if (err) throw err;
    console.log(`listening port 3000`);
});