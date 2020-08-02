const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(model) {
        this.hasMany(model.Addresses, { 
            foreignKey: 'user_id',
            as: 'addresses'
        })
        this.belongsToMany(model.Tech, {
            foreignKey: 'user_id',
            through: 'user_techs',
            as: 'techs'
        })
    }
}

module.exports = User