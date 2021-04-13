const express = require("express");
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
let db = require('../models/setup');
let posts = db.models.Post
const sequelize = require("../models/setup").sequelize;

dotenv.config()


const app = express.Router()

app.post('/posts', function (req, res) {
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
            res.status(403).send(err)
        }
        else {
            posts.findAll(
                {where: {
                    id: req.body.query
                }}
            )
                .then((post) => {
                    res.status(200).send(post)
                })
                .catch((err) => {
                    res.status(400).send(err)
                })
        }
    })
})

app.get('/followerpost', function (req, res) {

    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
            res.status(403).send(err)
        }
        else {
            var data = {}
            var tempdata = []
            posts.findAll({
                include: [{
                    model: db.models.User,
                    include: [{
                        model: db.models.Follow
                    }]
                }],
                distinct:true 
            })
                .then((posts) => {
                    posts.forEach((post) => {
                        let id = null;
                        post.User.Follows.forEach((follow) => {
                            if (follow.fk_idFollower == decode.id_user && !id) {
                                id = post.id;
                                tempdata.push(post)
                            }
                        })
                    });
                    data = tempdata
                    res.json(data)
                })
                .catch((err) => {
                    console.log(err)
                    res.status(400).send(err)
                })
        }
    })
})

module.exports = app