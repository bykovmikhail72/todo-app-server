const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Todo = sequelize.define("todo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING},
  description: { type: DataTypes.STRING },
  finishDate: { type: DataTypes.STRING },
  priority: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  creator: { type: DataTypes.STRING },
  worker: { type: DataTypes.STRING },
});

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = {
  User,
  Todo,
};
