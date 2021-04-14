module.exports = function(app) {
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = app.get('sequelize');

    const Aula = sequelize.define('Aula',{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
         timestamps: false,
        });  
    return Aula;
}