//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inspectores', {
    id_inspectores: {
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
    rol: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    empre_inspec: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    firma: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inspectores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_inspectores_pk",
        unique: true,
        fields: [
          { name: "id_inspectores" },
        ]
      },
    ]
  });
};
