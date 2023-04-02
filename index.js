const bodyParser= require('body-parser');
const express = require('express');
const app = express();
const {pokemon}= require('./pokedex.json');

/*
VERBOS HTTP
GET
POST
PATCH
PUT
DELETE
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res,next)=>{
    return res.status(200).send("Hola, bienvenido a la pokedex");
});

app.post("/pokemon", (req, res, next)=>{
    return res.status(200).send(req.body.name);
})

app.get('/pokemon', (req,res,next)=>{
    res.status(200);
    return res.send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req,res,next)=>{
    const id= req.params.id -1;
    if (id>=0 && id <=150) {
        res.status(200);
        return res.send(pokemon[req.params.id - 1]);
    }
    else {
        res.status(404);
        return res.send("Pokemon no encontrado");
    }
    
});

app.get('/pokemon/:name([A-Za-z]+)', (req,res,next)=>{
    const name = req.params.name;
    
    //If mamón(operadorTernario): condición ? valor si verdadero: valor si falso

    const pk = pokemon.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) && p;
    });

    (pk.length > 0 ) ? res.status(200).send(pk):res.status(200).send(pk);
    
    res.status(404).send("Pokemon no encontrado");
    
    
    });
  


app.listen(process.env.PORT || 3000,() =>{
    console.log("Server is running...")
});