'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Produtos', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			titulo: {
				allowNull: false,
				type: Sequelize.STRING
			},
			descricao: {
				allowNull: false,
				type: Sequelize.STRING
			},
			preco: {
				allowNull: false,
				type: Sequelize.DECIMAL(13, 2)
			},
			categoria: {
				allowNull: false,
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Produtos');
	}
};
