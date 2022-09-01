const { Sequelize } = require("sequelize");
const drinkModel = require("./models/Drink");

const sequelize = new Sequelize("BartendingDB", "DevOspreys", "ISSP", {
	host: "localhost",
	dialect: "mysql",
});

try {
	sequelize.authenticate().then(() => {
		console.log("Connection has been established successfully.");
	});
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

const models = {
	Drink: drinkModel(sequelize, Sequelize.DataTypes),
};

async function syncModels() {
	await sequelize.sync({ force: true });
	console.log("All models were synchronized successfully.");
}

syncModels();

module.exports = { sequelize };
