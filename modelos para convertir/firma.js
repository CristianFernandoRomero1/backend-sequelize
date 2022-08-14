//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('firma', {
    id_firma: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.STRING(59),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(59),
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_inspeccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inspeccion',
        key: 'id_inspeccion'
      }
    }
  }, {
    sequelize,
    tableName: 'firma',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_firma_pk",
        unique: true,
        fields: [
          { name: "id_firma" },
        ]
      },
    ]
  });
};
