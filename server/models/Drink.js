module.exports = (sequelize, Sequelize) => {
	return sequelize.define("Drink", {
		drinkName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		fulfilled: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
	});
};
