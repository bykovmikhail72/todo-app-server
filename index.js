require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require('./models/models')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const userRouter = require('./routes/user.routes')
const todoRouter = require('./routes/todo.routes')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api', userRouter)
app.use('/api', todoRouter)
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e)
  }
};

start();

