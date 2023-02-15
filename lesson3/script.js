// let os = require("os");
// console.log(os.platform());


// let express = require("express");

// let app = express();
// app.use(express.static("../final2/"));
// app.get("/",(req,res) => {
//     res.send("Home Page")
// })
// app.get("/names/:name", (req,res) => {
//     let name = req.params.name;
//     res.send(`<h1> ${name}</h1>`);
// })

// app.get("/google", (req,res) => {
//     res.redirect("https://www.google.com/");
// })

// app.get("/google/:search", (req,res) => {
//     let search = req.params.search;

//     res.redirect(`https://google.com/search?q=${search}`);
// })
// app.get("/game", (req,res) => {
//     res.redirect("modules/index.html");
// })
// app.get("/*", (req,res) => {
//     res.send("404 eror u tenc baner")
// })
// app.listen(3000);

var fs = require('fs');

let newFile = "ReadMe.txt";

fs.appendFileSync(newFile,"dafsadfjskldsafklj\n");