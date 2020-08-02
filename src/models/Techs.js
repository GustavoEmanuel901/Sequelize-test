const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs',
        })
    }

    static associate(model) {
        this.belongsToMany(model.User, { foreignKey: 'techs_id', through: 'user_techs', as: 'users'})
    }
}

module.exports = Tech