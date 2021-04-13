const mysql = require("mysql"); //APPEL DU MODULE MYSQL QUI PERMET D-AGIR SUR UNE BASE DE DONNEES
const express = require("express"); //APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE 
const bcrypt = require("bcrypt")
let db = require('../models/setup');
let users = db.models.User
const app = express.Router()

app.post('/', function (req, res){
    users.findOne({where: {email: req.body.email}, raw: true})
    .then((user)=>{
        if(user != null){
            res.json("Email déja existant")
        }
        else{
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(!err){
                    users.create({pseudo: req.body.pseudo, email: req.body.email, password: hash})
                    .then((user)=>{
                        res.status(200).json(user)
                    })
                    .catch((err)=>{
                        res.status(400).json(err)
                    })
                }
            })
        }
    })
    .catch((err)=>{
        res.status(400).json(err)
    })

})

module.exports = app