const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
var dataBase = require("./routes/database");
const app = express();
const bdd = require("./models/setup");

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const register = require("./routes/register");
const login = require("./routes/login");
const post = require("./routes/posting");
const getposts = require("./routes/getposts")
const follows = require('./routes/follows')
const getusers = require('./routes/getusers')

app.use("/register", register);
app.use("/login", login);
app.use('/post', post)
app.use('/getposts', getposts)
app.use("/follows", follows)
app.use("/getusers", getusers)

// CHOIX DU PORT UTILISE PAR LE SERVEUR
bdd.sequelize.sync()
.then(() => {
    const port = 3050; //? RECUPERE UN PORT LIBRE SINON 3000
    app.listen(port, () => {
        console.log("Ok ca marche");
        console.log("sur serveur" + port);
    });
});

app.get("/", function (req, res) {
    res.send("Hello World!");
});
