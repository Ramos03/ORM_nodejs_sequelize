'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Usuarios', [
			{
				name: 'Ana Souza',
				email: 'ana@ana.com',
				password: '1234',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Marcos Cintra',
				email: 'marcos@marcos.com',
				password: '1234',
				createdAt: new Date(),
				updatedAt: new Date()
			},
		])
	},
	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Usuarios', null, {})
	}
};
