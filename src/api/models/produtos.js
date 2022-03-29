'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model {};
    Produtos.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.DECIMAL(13, 2),
        categoria: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Produtos',
    });
    return Produtos;
};