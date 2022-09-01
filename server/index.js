const express = require("express");
const app = express();
const apiRouter = require("./routes/api");
const cors = require("cors");
const { connection } = require("./dbConfig");
const bodyParser = require("body-parser");

app.use(express.json());

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());

app.use("/api", apiRouter);

app.listen(5000, () => {
	console.log("Express Server Started.");
});
