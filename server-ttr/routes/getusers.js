const express = require("express");
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
let db = require('../models/setup');
let users = db.models.User
const sequelize = require("../models/setup").sequelize;

dotenv.config()


const app = express.Router()

app.get('/byid/:id', (req, res)=>{
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
            res.status(403).send(err)
        }
        else {
            var tempdata = []
            var data = {}
            users.findOne({
                where: {
                  id: req.params.id
                },
                include: [{
                    model: db.models.Follow,
                }]}
            )
            .then((response)=>{      
                res.json(response)
            })
            .catch((err)=>{
                res.status(400).send(err)
            })
        }
    })
})

app.post('/byname', (req, res)=>{
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
            res.status(403).send(err)
        }
        else {
            var tempdata = []
            var data = {}
            users.findAll({
                where: {
                    pseudo: sequelize.where(sequelize.fn('LOWER', sequelize.col('pseudo')), 'LIKE', '%' + req.body.query.toLowerCase() + '%')
                },
                include: [{
                    model: db.models.Follow,
                }]}
            )
            .then((response)=>{      
                res.json(response)
            })
            .catch((err)=>{
                res.status(400).send(err)
            })
        }
    })
})

module.exports = app