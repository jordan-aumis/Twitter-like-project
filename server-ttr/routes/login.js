const bcrypt = require("bcrypt")
const express = require("express"); 
const jwt = require("jsonwebtoken")
let db = require('../models/setup');
let users = db.models.User
const dotenv = require('dotenv');
dotenv.config()

const app = express.Router()

app.post('/', function (req, res){
    if(!req.body.email){
        res.send("Vous n'avez pas entré d'email")
    }
    else{
        users.findOne({where:{email: req.body.email}})
        .then((user)=>{
            bcrypt.compare(req.body.password, user.password, (err, result)=> {
                if(result){
                    let token = jwt.sign({id_user: user.id}, process.env.SECRET_KEY, {expiresIn: '7d'})
                    let response = {'token': token, 'idUser': user.id}
                    res.json(response)
                }
                else{
                    res.send("Mot de passe érroné.")
                }
            })
        }
        )
    }
})

module.exports = app