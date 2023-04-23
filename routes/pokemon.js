const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

/*
VERBOS HTTP
GET
POST
PATCH
PUT
DELETE
*/

pokemon.post("/", async (req, res, next) => {
    const { pok_name, pok_height, pok_weight, pok_base_experience} = req.body;
    if (pok_name &&  pok_height && pok_weight && pok_base_experience) {
        let query= "INSERT INTO pokemon(pok_name, pok_height, pok_weight, pok_base_experience)";
        query+= `VALUES('${pok_name}', ${pok_height}, ${pok_base_experience})`;

        
        const rows= await db.query(query);
    
        if (rows.affectedRows == 1) {
            return res.status(200).json({code:201, message: "Pokemon insertado correctamente"});
        }


        return res.status(500).json({code:500, message: "Ocurrió un error"});
    }
    return res.status(500).json({ code: 500, message: "Campos Incompletos"});
    
    let query= "INSERT INTO pokemon(pok_name, pok_height, pok_weight, pok_base_experience)";
    query+= `VALUES('${pok_name}', ${pok_height}, ${pok_base_experience})`;
    
    });

pokemon.get('/', async (req, res, next)=>{
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json({code: 1, message: pkm});
});

pokemon.get('/:id([0-9]{1,3})', async (req,res,next)=>{
    const id= req.params.id;
    if (id>=0 && id <=722) {
        const pkmn= await db.query("SELECT * FROM pokemon WHERE pok_id =" + id + ";");
        return res.status(200).json({code:200, message: pkm});
    }
        return res.status(404).send({code:404, message: "Pokemon no encontrado"});
    
    
});

pokemon.get('/:name([A-Za-z]+)', async (req,res,next)=>{
    const name = req.params.name;
    
    //If mamón(operadorTernario): condición ? valor si verdadero: valor si falso
    if (name > 0 ) {
        const pkmn= await db.query("SELECT * FROM pokemon WHERE pok_name =" + name+";");

        return res.status(200).json({code: 1, message: pkm});
    } 
    
    return res.status(404).send({code:404, message: "Pokemon no encontrado"});
    
    
    });
  
    module.exports = pokemon;