const express = require("express"); 
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
let db = require('../models/setup');
let posts = db.models.Post


dotenv.config()



const app = express.Router()

app.post('/', function(req, res){
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode)=>{
        if(err){
            res.status(403).json(err)
        }
        else{
            posts.create({contenu: req.body.content, UserId: decode.id_user})
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