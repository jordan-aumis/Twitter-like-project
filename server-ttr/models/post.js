const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const Post = sequelize.define('Post', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        contenu: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Post
}


