const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../startup/db')
const Credit = require('./credit')

class User extends Model {}
User.init(
  {
    firstname: { type: DataTypes.STRING, required: true, index: true },
    lastname: { type: DataTypes.STRING, required: true },
    username: { type: DataTypes.STRING, required: true },
    email: { type: DataTypes.STRING, required: true },
    password: { type: DataTypes.STRING, required: true },
    isadmin: { type: DataTypes.BOOLEAN, default: false },
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: false,
  },
)

module.exports = User
