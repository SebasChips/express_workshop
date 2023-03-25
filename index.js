const express = require('express');
const app = express();

/*
VERBOS HTTP
GET
POST
PATCH
PUT
DELETE
*/
app.get("/", (req,res,next)=>{
    res.status(200);
    res.send("B3ienvenido a mi server jijijjij");
});

app.get("/:nombre", (req, res, next) =>{
    res.status(200)
    res.send("Estás en la página 'nombre' ");
})

app.listen(3000, () =>{
    console.log("Server is running...")
});