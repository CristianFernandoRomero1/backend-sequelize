//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dependencias', {
    id_dependencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_dep: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    codigo_essa: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dependencias',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__dependen__81E5683CFB6AF9AC",
        unique: true,
        fields: [
          { name: "id_dependencia" },
        ]
      },
    ]
  });
};
