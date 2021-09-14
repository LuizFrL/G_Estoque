const express = require("express")
const path = require("path")

const app = express()




app.use(express.static("../public"))


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


app.listen(process.env.PORT || 3002, () => console.log("server rodando"))