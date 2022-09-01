const express = require("express");
const apiRouter = express.Router();
const { create } = require("../controller");
// Create a new drink
apiRouter.post("/addDrink", create);

/* // Retrieve all Drinks
apiRouter.get("/getDrinks", Drinks.findAll);

// Delete a drink with id
apiRouter.delete("/:id", Drinks.delete);
// Delete all drinks
apiRouter.delete("/", Drinks.deleteAll); */

module.exports = apiRouter;
