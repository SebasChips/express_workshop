const express = require('express');
const user = express.Router();
const db = require('../config/database');

user.post("/", async (req,res,next) => {
    const {user_name, user_mail, user_password} = req.body;

    if (user_name && user_mail && user_password) {
        let query = "INSERT INTO userr(user_id, user_name, user_mail, user_password)"
        query += `VALUES('${user_name}', '${user_mail}', '${user_password})'`

        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
         return res.status.json({code:201, message: "Usuario registrado correctamente"});
        }
        return res.status(500).json({code:500, message: "Ocurrió un error"});
    }
    return res.status(500).json({code:500, message: "Campos incompletos"});

    });


user.get("/", async (req, res, next) =>{
    const query= "SELECT * FROM userr";
    const rows = await db.query (query);

    return res.status(200).json({code:200, message: rows});
})

    module.exports = user;