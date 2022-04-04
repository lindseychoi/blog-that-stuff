const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our m1 model
class Blog extends Model {}

// create fields/columns for m1 model
Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
  }
);

module.exports = Blog;
