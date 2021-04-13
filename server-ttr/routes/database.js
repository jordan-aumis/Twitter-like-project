//? CREATION DES DEPENDANCES DE MODULES
const mysql = require('mysql');

const dbConnexion = mysql.createConnection({
    host: 'localhost',
    database: "simplon_bdd",
    user: "jordi",
    password: "Bluechicken0",
    port: 3306,
    strict: false
});

// dbConnexion.connect((err) => {
//     if (err) {
//         console.log(err.message);

//     }else {
//         console.log("Connexion à la base réussie");
//     }
// });

//? LISTE DES VARIABLES QUI VONT ETRE EXPORTEES

module.exports = dbConnexion