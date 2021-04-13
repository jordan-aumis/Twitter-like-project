const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const Follow = sequelize.define('Follow', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fk_idFollower: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_idFollowed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return Follow
}
