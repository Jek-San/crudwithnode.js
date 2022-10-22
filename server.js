const port = 3199;
const express = require("express");
const heroController = require("./controller/hero.controller")
const bodyParser = require('body-parser')
const server = express() 


server.use(bodyParser.urlencoded({extended: false}))

server.set("view engine", "ejs")
server.set("views", "view")

server.use("/hero", heroController)

server.use('/', (request, response) =>{
    response.send("Main Server Succes")
})  


server.listen(port, () =>{
    console.log(`Server running on port : ${port} http://localhost:${port}`);
})

