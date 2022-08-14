//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehiculo_inspeccion', {
    id_veh_ins: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_vehiculo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING(50),
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
    tableName: 'vehiculo_inspeccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_veh_ins_pk",
        unique: true,
        fields: [
          { name: "id_veh_ins" },
        ]
      },
    ]
  });
};
