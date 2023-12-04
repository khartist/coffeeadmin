console.log("start send request to server");
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./src/models')
const config = require('./src/config/db.config.js')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sManager',
  password: 'sManager',
  database: 'INTERNET_CAFE'
})

const app = express();
app.use(morgan("combined"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/public', express.static('public'));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

connection.connect()

// set port, listen for requests
/*sequelize.sync({ force: false })
	.then(() => {
		app.listen(db.config.port, () => console.log(`Express server running on port ${db.config.port}`));
	})*/