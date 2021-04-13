const express = require("express"); 
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
let db = require('../models/setup');
let follows = db.models.Follow

dotenv.config()

const app = express.Router()

app.post('/', function(req, res){
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode)=>{
        if(err){
            res.status(403).send(err)
        }
        else{
            follows.create({UserId: decode.id_user, fk_idFollower: decode.id_user, fk_idFollowed: 4})
            .then((post)=>{
                res.status(200).send(post)
            })
            .catch((err)=>{
                res.status(400).send(err)
            })
        }
    })
})

app.get('/allfollows', function(req, res){
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode)=>{
        if(err){
            res.status(403).send(err)
        }
        else{
            follows.findAll()
            .then((post)=>{
                res.status(200).json(post)
            })
            .catch((err)=>{
                res.status(400).json(err)
            })
        }
    })
})

module.exports = app