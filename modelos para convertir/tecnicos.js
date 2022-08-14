//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tecnicos', {
    id_tecnicos: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cedula: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cargo: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    id_contrato: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contrato',
        key: 'id_contrato'
      }
    }
  }, {
    sequelize,
    tableName: 'tecnicos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_tecnicos_pk",
        unique: true,
        fields: [
          { name: "id_tecnicos" },
        ]
      },
    ]
  });
};
