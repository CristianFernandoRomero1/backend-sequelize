//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tablaroles', {
    IDrol: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rol: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tablaroles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IDrol_pk",
        unique: true,
        fields: [
          { name: "IDrol" },
        ]
      },
    ]
  });
};
