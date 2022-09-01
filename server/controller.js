const { sequelize } = require("./dbConfig");

const Drink = require("./models/Drink")(sequelize);
//const { Op } = require("sequelize");

const create = (req, res) => {
	// Validate request
	if (!req.body.name) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}
	// Create a drink
	const drink = {
		name: req.body.name,
		fulfilled: false,
	};
	// Save drink in the database
	Drink.create(drink)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while adding drink to database.",
			});
		});
};

module.exports = { create };
