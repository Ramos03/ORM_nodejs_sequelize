'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Usuarios extends Model {};
    Usuarios.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Usuarios',
    });
    return Usuarios;
};