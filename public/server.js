const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors");


var bodyParser = require('body-parser');

app.use(function(req,res,next) {
    app.use(cors())
    res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});


app.use(express.static("./"))


app.get("/estoque", (req, res) => {
    res.sendFile(path.resolve(__dirname,"pages","estoque.html"))
})

app.get("/meusdados", (req, res) => {
    res.sendFile(path.resolve(__dirname,"pages","meusdados.html"))
})

app.get("/ajuda", (req, res) => {
    res.sendFile(path.resolve(__dirname,"pages","ajuda.html"))
})

app.get("/sobrenos", (req, res) => {
    res.sendFile(path.resolve(__dirname,"pages","sobrenos.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"pages","login.html"))
})


app.listen(process.env.PORT || 3002, () => console.log("server rodando"))