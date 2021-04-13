const Sequelize = require('sequelize')

const sequelize = new Sequelize('simplon_bdd', "jordi", "Bluechicken0",{
    host: 'localhost',
    dialect: 'mysql'
})

const user = require('./user')(sequelize)
const post = require('./post')(sequelize)
const follow = require('./follow')(sequelize)

// ASSOCIATION

post.belongsTo(user, {
    onDelete: 'cascade',
    allowNull: false
})

user.hasMany(post, {
    onDelete: 'cascade'
});

user.hasMany(follow, {
    onDelete: 'cascade'
});

follow.belongsTo(user, {
    foreignKey: 'fk_idFollower',
    targetKey: 'id',
    onDelete: 'cascade'
});

follow.belongsTo(user, {
    foreignKey: 'fk_idFollowed',
    targetKey: 'id',
    onDelete: 'cascade'
});

// ______________________________________________________________
const models = {
    User: user,
    Post: post,
    Follow: follow
}

exports.sequelize = sequelize

exports.models = models