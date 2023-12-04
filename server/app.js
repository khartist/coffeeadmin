console.log("start send request to server");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./src/models')
const config = require('./src/config/db.config.js')

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

// set port, listen for requests
sequelize.sync({ force: false })
	.then(() => {
		app.listen(config.port, () => console.log(`Express server running on port ${db.config.port}`));
	})
/*const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')

require('./routes')(app)

sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })*/