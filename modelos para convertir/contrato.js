//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contrato', {
    id_contrato: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "contrato_uk"
    },
    contrato: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    jefe: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    equipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dependencia: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    admcontra: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    objetivo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado_cont: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contrato',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "contrato_uk",
        unique: true,
        fields: [
          { name: "id_contrato" },
        ]
      },
      {
        name: "id_contrato_pk",
        unique: true,
        fields: [
          { name: "id_contrato" },
        ]
      },
    ]
  });
};
