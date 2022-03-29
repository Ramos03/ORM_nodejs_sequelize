'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Produtos', [
			{
				titulo: 'Iphone 13',
				descricao: 'Iphone 13 Pro max 512gb',
				preco: 13221.23,
				categoria: 'celular',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				titulo: 'Macbook Pro',
				descricao: 'Macbook pro M1',
				preco: 23221.23,
				categoria: 'notebooks',
				createdAt: new Date(),
				updatedAt: new Date()
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Produtos', null, {})
	}
};
