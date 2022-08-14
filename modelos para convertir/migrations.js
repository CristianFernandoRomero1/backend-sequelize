//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    migration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'migrations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__migratio__3213E83F59B03019",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
