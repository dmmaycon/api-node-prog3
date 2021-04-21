const express = require('express')
const app = express()
const cors = require('cors')
const consign = require('consign')
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

sequelize.sync({ force: true });

app.use(cors())
app.use(express.json())
app.set('sequelize', sequelize);

// faz que o consign pegue tudo que está dentro da pasta controllers e jogue para dentro app
consign()
    .include('models')
    .then('controllers')
    .into(app)


app.get('/', function (request, response) {
  response.send('API NODEJS - express')
})

app.listen(3000)