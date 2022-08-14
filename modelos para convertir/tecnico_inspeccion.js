//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tecnico_inspeccion', {
    id_tec_ins: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    INSPECCION_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inspeccion',
        key: 'id_inspeccion'
      }
    },
    id_tecnicos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tecnico_inspeccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "id_tec_ins_pk",
        unique: true,
        fields: [
          { name: "id_tec_ins" },
        ]
      },
    ]
  });
};
